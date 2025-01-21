import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ShuttleContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.h1`
  font-family: Lato, sans-serif;
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FilterInput = styled.input`
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

// Function to generate bus schedules
const generateBusSchedule = (shiftStart, startLocation, endLocation) => {
  const buses = [];
  let shiftStartTime = new Date(shiftStart);

  // Loop through and create buses with 5-minute gaps
  for (let i = 0; i < 3; i++) {
    const busStartTime = new Date(shiftStartTime.getTime() - 40 * 60000 - i * 5 * 60000);
    const busStartTimeFormatted = busStartTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    buses.push({
      busNumber: `S${i + 1}`,
      driverName: `Driver ${i + 1}`,
      driverNumber: `123456789${i}`,
      busName: `Bus ${i + 1}`,
      startLocation,
      startTime: busStartTimeFormatted,
      endLocation,
      endTime: "TBD",
      stops: `Stop 1 – Stop 2 – Stop 3`,
      liveLocation: `Point ${Math.floor(Math.random() * 10 + 1)}`, // Simulate initial location
    });
  }

  return buses;
};

const Shuttle = () => {
  const [filter, setFilter] = useState({
    fromPlace: "",
    toPlace: "",
  });

  const [shuttleSchedules, setShuttleSchedules] = useState([]);

  useEffect(() => {
    const shiftSchedules = [
      {
        shiftStart: "2025-01-07T06:00:00",
        startLocation: "Location A",
        endLocation: "Location B",
      },
      {
        shiftStart: "2025-01-07T14:00:00",
        startLocation: "Location B",
        endLocation: "Location C",
      },
      {
        shiftStart: "2025-01-07T22:00:00",
        startLocation: "Location C",
        endLocation: "Location D",
      },
      {
        shiftStart: "2025-01-07T08:30:00",
        startLocation: "Location D",
        endLocation: "Location E",
      },
    ];

    const schedules = shiftSchedules.flatMap((schedule) =>
      generateBusSchedule(schedule.shiftStart, schedule.startLocation, schedule.endLocation)
    );

    setShuttleSchedules(schedules);

    const interval = setInterval(() => {
      setShuttleSchedules((prevSchedules) =>
        prevSchedules.map((schedule) => ({
          ...schedule,
          liveLocation: `Point ${Math.floor(Math.random() * 10 + 1)}`, // Update location dynamically
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredSchedules = shuttleSchedules.filter((schedule) => {
    return (
      (filter.fromPlace ? schedule.startLocation.toLowerCase().includes(filter.fromPlace.toLowerCase()) : true) &&
      (filter.toPlace ? schedule.endLocation.toLowerCase().includes(filter.toPlace.toLowerCase()) : true)
    );
  });

  return (
    <ShuttleContainer>
      <Header>Shuttle Schedule</Header>

      {/* Filter Section */}
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="From Place"
          value={filter.fromPlace}
          onChange={(e) => setFilter({ ...filter, fromPlace: e.target.value })}
        />
        <FilterInput
          type="text"
          placeholder="To Place"
          value={filter.toPlace}
          onChange={(e) => setFilter({ ...filter, toPlace: e.target.value })}
        />
      </FilterContainer>

      {/* Shuttle Schedule Table */}
      <Table>
        <thead>
          <tr>
            <TableHeader>Bus Number</TableHeader>
            <TableHeader>Driver Name</TableHeader>
            <TableHeader>Driver Number</TableHeader>
            <TableHeader>Bus Name</TableHeader>
            <TableHeader>From Place</TableHeader>
            <TableHeader>Start Time</TableHeader>
            <TableHeader>To Place</TableHeader>
            <TableHeader>End Time</TableHeader>
            <TableHeader>Stops</TableHeader>
            <TableHeader>Live Location</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.map((schedule, index) => (
            <TableRow key={index}>
              <TableCell>{schedule.busNumber}</TableCell>
              <TableCell>{schedule.driverName}</TableCell>
              <TableCell>{schedule.driverNumber}</TableCell>
              <TableCell>{schedule.busName}</TableCell>
              <TableCell>{schedule.startLocation}</TableCell>
              <TableCell>{schedule.startTime}</TableCell>
              <TableCell>{schedule.endLocation}</TableCell>
              <TableCell>{schedule.endTime}</TableCell>
              <TableCell>{schedule.stops}</TableCell>
              <TableCell>{schedule.liveLocation}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ShuttleContainer>
  );
};

export default Shuttle;
