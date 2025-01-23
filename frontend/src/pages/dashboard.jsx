import React from "react";
import styled from "styled-components";
import IMAGE from "../assets/bk_image.png";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;

  h1 {
    font-size: 3rem;
    color: #000;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  select {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
   label {
    font-size: 1rem;
    color: #555;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  button {
    padding: 12px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #333;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const ScheduleFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 1rem;
    color: #555;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex: 1;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 80%;
    }
  }
`;

// Component
const Homepage = () => {
  return (
    <Container>
      {/* Left Section */}
      <LeftSection>
        <h1>Request a ride </h1>
        <p>Add your trip details, hop in, and go.</p>
        <Form>
          <label htmlFor="location">Select Location:</label>
          <select id="location" name="location">
            <option value="club-house">Club house, JSL</option>
            <option value="power-plant">Power Plant, JSL</option>
            <option value="shakti-bhavan">Shakti Bhavan, JSL</option>
            <option value="crm">CRM, JSL</option>
            <option value="store-1">Store 1, JSL</option>
            <option value="hsm">HSM, JSL</option>
            <option value="quality-house">Quality House, JSL</option>
            <option value="sms-lab">SMS_LAB office, JSL</option>
            <option value="get-hostel">Get Hostel, JSL</option>
            <option value="project-store">Project store, JSL</option>
            <option value="jigging-plant">Jigging Plant, JSL</option>
            <option value="lime-plant">Lime Plant, JSL</option>
          </select>
          <label htmlFor="destination">Select Destination:</label>
          <select id="destination" name="destination">
            <option value="club-house">Club house, JSL</option>
            <option value="power-plant">Power Plant, JSL</option>
            <option value="shakti-bhavan">Shakti Bhavan, JSL</option>
            <option value="crm">CRM, JSL</option>
            <option value="store-1">Store 1, JSL</option>
            <option value="hsm">HSM, JSL</option>
            <option value="quality-house">Quality House, JSL</option>
            <option value="sms-lab">SMS_LAB office, JSL</option>
            <option value="get-hostel">Get Hostel, JSL</option>
            <option value="project-store">Project store, JSL</option>
            <option value="jigging-plant">Jigging Plant, JSL</option>
            <option value="lime-plant">Lime Plant, JSL</option>
          </select>
          <ScheduleFields>
            <label htmlFor="ride-date">Select Date:</label>
            <input type="date" id="ride-date" />
            <label htmlFor="ride-time">Select Time:</label>
            <input type="time" id="ride-time" />
          </ScheduleFields>
          <Buttons>
            <button>Request for Ride</button>
            <button style={{ backgroundColor: "#ddd", color: "#000" }}>
              Schedule for Later
            </button>
          </Buttons>
        </Form>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <img src={IMAGE} alt="Request a Ride" />
      </RightSection>
    </Container>
  );
};

export default Homepage;
