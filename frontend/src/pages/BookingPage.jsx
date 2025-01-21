import React, { useState } from "react";
import styled from "styled-components";

// Styled Components (CSS)
const BookingsContainer = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  background-color: rgb(242, 242, 242);
  display: flex;
  padding: 6px 8px;
  margin-bottom: 0px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    align-items: center;
  }
`;

const Manage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const Title = styled.div`
  color: #333;
  display: flex;
  width: 40%;
  font-size: 18px;
`;

const SearchBar = styled.input`
  padding: 10px 20px;
  width: 420px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-left: 0px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
`;

const ToggleBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid rgb(155, 150, 150);
  margin-bottom: 0px;
  width: auto;
`;

const FilterButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e7f3ff")};
  }
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 12px 10px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;

    @media (max-width: 768px) {
      padding: 8px 10px;
    }
  }

  th {
    background-color: #007bff;
    color: #fff;
    font-size: 14px;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 3px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;

  &.start-trip {
    background-color: #28a745;
    color: white;
  }

  &.end-trip {
    background-color: #007bff;
    color: white;
  }

  &.cancel-trip {
    background-color: #dc3545;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const BookingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const bookings = [
    {
      id: 1,
      carModel: "Toyota Innova",
      carNumber: "MH12AB1234",
      bookingDate: "2025-01-08",
      rideStartTime: "08:30 AM",
      rideEndTime: "09:30 AM",
      pickupLocation: "CPP Building",
      dropoffLocation: "Main Gate",
      bookingStatus: "Scheduled",
      driverName: "John Doe",
    },
    {
      id: 2,
      carModel: "Hyundai i20",
      carNumber: "MH14XY5678",
      bookingDate: "2025-01-09",
      rideStartTime: "10:00 AM",
      rideEndTime: "11:00 AM",
      pickupLocation: "CPP Building",
      dropoffLocation: "East Gate",
      bookingStatus: "Completed",
      driverName: "Jane Smith",
    },
    {
      id: 3,
      carModel: "Maruti Suzuki Ertiga",
      carNumber: "MH12XY7890",
      bookingDate: "2025-01-08",
      rideStartTime: "06:00 AM",
      rideEndTime: "07:00 AM",
      pickupLocation: "North Gate",
      dropoffLocation: "South Gate",
      bookingStatus: "Current",
      driverName: "Michael Lee",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchFilter =
      activeFilter === "All" ||
      (activeFilter === "Current" && booking.bookingStatus === "Current") ||
      (activeFilter === "Scheduled" && booking.bookingStatus === "Scheduled") ||
      (activeFilter === "Completed" && booking.bookingStatus === "Completed");

    const matchSearch =
      !searchQuery ||
      booking.driverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.pickupLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.dropoffLocation.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDate = !searchDate || booking.bookingDate === searchDate;

    return matchFilter && matchSearch && matchDate;
  });

  return (
    <BookingsContainer>
      <Header>
        <Manage>
          <Title>Manage Bookings</Title>
          <SearchBar
            type="text"
            placeholder="Search by Driver Name, Pickup/Drop Locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchBar
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </Manage>
      </Header>

      {/* Filters */}
      <ToggleContainer>
        <ToggleBox>
          <FilterButton
            active={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton
            active={activeFilter === "Current"}
            onClick={() => setActiveFilter("Current")}
          >
            Current Rides
          </FilterButton>
          <FilterButton
            active={activeFilter === "Scheduled"}
            onClick={() => setActiveFilter("Scheduled")}
          >
            Scheduled Rides
          </FilterButton>
          <FilterButton
            active={activeFilter === "Completed"}
            onClick={() => setActiveFilter("Completed")}
          >
            Completed Rides
          </FilterButton>
        </ToggleBox>
      </ToggleContainer>

      {/* Table */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Car Model and Number</th>
              <th>Booking Date</th>
              <th>Ride Start Time</th>
              <th>Ride End Time</th>
              <th>Pickup Location</th>
              <th>Drop-off Location</th>
              <th>Booking Status</th>
              <th>Driver Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>
                    {booking.carModel} - {booking.carNumber}
                  </td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.rideStartTime}</td>
                  <td>{booking.rideEndTime}</td>
                  <td>{booking.pickupLocation}</td>
                  <td>{booking.dropoffLocation}</td>
                  <td>{booking.bookingStatus}</td>
                  <td>{booking.driverName}</td>
                  <td>
                    {booking.bookingStatus === "Scheduled" && (
                      <ActionButton className="start-trip">Start Trip</ActionButton>
                    )}
                    {booking.bookingStatus === "Current" && (
                      <ActionButton className="end-trip">End Trip</ActionButton>
                    )}
                    <ActionButton className="cancel-trip">Cancel Trip</ActionButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No bookings found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </BookingsContainer>
  );
};

export default BookingPage;
