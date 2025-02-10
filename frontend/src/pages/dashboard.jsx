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
            <option value="main-gate-1">Main Gate No 1, JSL</option>
            <option value="club-house">Club House, JSL</option>
            <option value="ohc">OHC, JSL</option>
            <option value="coke-oven">Coke Oven, JSL</option>
            <option value="cpp">CPP, JSL</option>
            <option value="store-2">Store 2, JSL</option>
            <option value="automobile-workshop">Automobile Workshop, JSL</option>
            <option value="shakti-bhawan">Shakti Bhawan, JSL</option>
            <option value="sms">SMS, JSL</option>
            <option value="hsm">HSM, JSL</option>
            <option value="crmhs">CRMHS, JSL</option>
            <option value="railway-siding">Railway Siding, JSL</option>
            <option value="coal-testing-lab">Coal Testing Lab Office, JSL</option>
            <option value="icd">ICD, JSL</option>
            <option value="gate-6">Gate No 6, JSL</option>
            <option value="crm">CRM, JSL</option>
            <option value="crm-back-side">CRM Back Side, JSL</option>
            <option value="crm-comboline">CRM Comboline/Zmill, JSL</option>
            <option value="33kva">33KVA, JSL</option>
            <option value="ferro-manganese">Ferro Manganese, JSL</option>
            <option value="materials-lab">Materials Lab, JSL</option>
            <option value="chrome-pellet-plant">Chrome Pellet Plant, JSL</option>
            <option value="gate-2">Gate No 2, JSL</option>
            <option value="gate-3">Gate No 3, JSL</option>
            <option value="gate-4">Gate No 4, JSL</option>
            <option value="gate-5">Gate No 5, JSL</option>
            <option value="lime-plant">Lime Plant, JSL</option>
            <option value="sinter-plant">Sinter Plant, JSL</option>
            <option value="bf-project">BF Project, JSL</option>
            <option value="bf-rmhs">BF RMHS, JSL</option>
            <option value="sms-pump-house">SMS Pump House, JSL</option>
            <option value="sms-lab-office">SMS Lab Office, JSL</option>
            <option value="quality-house">Quality House, JSL</option>
            <option value="capl">CAPL, JSL</option>
            <option value="hapl">HAPL, JSL</option>
            <option value="security-barack">Security Barack, JSL</option>
            <option value="security-barack-family">Security Barack Family, JSL</option>
            <option value="helipad">Helipad, JSL</option>
            <option value="get-hostel">GET Hostel, JSL</option>
            <option value="sms-scrap-yard">SMS Scrap Yard, JSL</option>
            <option value="sms-bunker-yard">SMS Bunker Yard, JSL</option>
            <option value="boc-linde">BOC/Linde, JSL</option>
          </select>
          <label htmlFor="destination">Select Destination:</label>
          <select id="destination" name="destination">
            <option value="main-gate-1">Main Gate No 1, JSL</option>
            <option value="club-house">Club House, JSL</option>
            <option value="ohc">OHC, JSL</option>
            <option value="coke-oven">Coke Oven, JSL</option>
            <option value="cpp">CPP, JSL</option>
            <option value="store-2">Store 2, JSL</option>
            <option value="automobile-workshop">Automobile Workshop, JSL</option>
            <option value="shakti-bhawan">Shakti Bhawan, JSL</option>
            <option value="sms">SMS, JSL</option>
            <option value="hsm">HSM, JSL</option>
            <option value="crmhs">CRMHS, JSL</option>
            <option value="railway-siding">Railway Siding, JSL</option>
            <option value="coal-testing-lab">Coal Testing Lab Office, JSL</option>
            <option value="icd">ICD, JSL</option>
            <option value="gate-6">Gate No 6, JSL</option>
            <option value="crm">CRM, JSL</option>
            <option value="crm-back-side">CRM Back Side, JSL</option>
            <option value="crm-comboline">CRM Comboline/Zmill, JSL</option>
            <option value="33kva">33KVA, JSL</option>
            <option value="ferro-manganese">Ferro Manganese, JSL</option>
            <option value="materials-lab">Materials Lab, JSL</option>
            <option value="chrome-pellet-plant">Chrome Pellet Plant, JSL</option>
            <option value="gate-2">Gate No 2, JSL</option>
            <option value="gate-3">Gate No 3, JSL</option>
            <option value="gate-4">Gate No 4, JSL</option>
            <option value="gate-5">Gate No 5, JSL</option>
            <option value="lime-plant">Lime Plant, JSL</option>
            <option value="sinter-plant">Sinter Plant, JSL</option>
            <option value="bf-project">BF Project, JSL</option>
            <option value="bf-rmhs">BF RMHS, JSL</option>
            <option value="sms-pump-house">SMS Pump House, JSL</option>
            <option value="sms-lab-office">SMS Lab Office, JSL</option>
            <option value="quality-house">Quality House, JSL</option>
            <option value="capl">CAPL, JSL</option>
            <option value="hapl">HAPL, JSL</option>
            <option value="security-barack">Security Barack, JSL</option>
            <option value="security-barack-family">Security Barack Family, JSL</option>
            <option value="helipad">Helipad, JSL</option>
            <option value="get-hostel">GET Hostel, JSL</option>
            <option value="sms-scrap-yard">SMS Scrap Yard, JSL</option>
            <option value="sms-bunker-yard">SMS Bunker Yard, JSL</option>
            <option value="boc-linde">BOC/Linde, JSL</option>
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
