import React, { useState,useEffect }  from "react";
import styled from "styled-components";
import axios from "axios";
import profilePic from "../assets/profile.png"; // Add a placeholder image or employee profile image

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const ProfileCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid #ffa500;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const ProfileRole = styled.h2`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  label {
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 16px;
    color: #555;
  }
`;

const EditButton = styled.button`
  background-color: #ffa500;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #ff8c00;
  }
`;

const EmployeeProfilePage = () => {
  const [employee, setEmployee] = useState(null); // state to store employee data
  const [error, setError] = useState(""); // state to store error message
  const token = localStorage.getItem("token"); // get token from localStorage

  useEffect(() => {
    // Fetch the user profile data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // pass the token in the headers
          },
        });
        setEmployee(response.data); // set the employee data to state
      } catch (err) {
        setError("Failed to fetch user profile data.");
      }
    };
    if (token) {
      fetchUserProfile(); // only fetch if there's a token
    } else {
      setError("No authentication token found.");
    }
  }, [token]);
   // If the employee data is still being fetched
  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileImage src={profilePic} alt="Profile" />
        <ProfileName>{employee.name}</ProfileName>
        <ProfileRole>{employee.designation}</ProfileRole>

        <ProfileInfo>
          <InfoRow>
            <label>Employee ID:</label>
            <span>{employee.empId}</span>
          </InfoRow>
          <InfoRow>
            <label>Email:</label>
            <span>{employee.email}</span>
          </InfoRow>
          <InfoRow>
            <label>Gender:</label>
            <span>{employee.gender}</span>
          </InfoRow>
          <InfoRow>
            <label>Phone:</label>
            <span>{employee.phone}</span>
          </InfoRow>
          <InfoRow>
            <label>Department:</label>
            <span>{employee.department}</span>
          </InfoRow>
        </ProfileInfo>

        <EditButton>Edit Profile</EditButton>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default EmployeeProfilePage;
