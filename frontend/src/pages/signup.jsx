import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/jsl_logo.png"; // Ensure the logo path is correct
// Styled Components
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* Full-screen height */
  background-color: #f4f4f4;
  margin: 0;
  padding: 10px; /* Add padding for small screens */
  @media (max-width: 768px) {
    height: auto;
  }
`;

const SignupBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout for smaller screens */
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  grid-column: span 2; /* Button spans across two columns */
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  background-color: #ffa500;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%; /* Full width for responsiveness */

  &:hover {
    background-color: #ff8c00;
  }

  @media (max-width: 768px) {
    grid-column: 1; /* Adjust button placement for single-column layout */
    font-size: 14px;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Component
const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    email: "",
    gender: "",
    phone: "",
    department: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.empId ||
      !formData.email ||
      !formData.gender ||
      !formData.phone ||
      !formData.department ||
      !formData.designation ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill out all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("User Signed Up with Data:", formData);
    setError("");

    navigate("/login"); // Redirect to login page
  };

  return (
    <SignupContainer>
      <SignupBox>
        <Logo src={logo} alt="Company Logo" />
        <Title>Travel Desk Portal - Sign Up</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="empId">Employee ID</Label>
            <Input
              type="text"
              id="empId"
              name="empId"
              placeholder="Enter your employee ID"
              value={formData.empId}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="department">Department</Label>
            <Input
              type="text"
              id="department"
              name="department"
              placeholder="Enter your department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="designation">Designation</Label>
            <Input
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter your designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </Form>
        <Footer>
          Already have an account? <a href="/login">Login here</a>
        </Footer>
      </SignupBox>
    </SignupContainer>
  );
};

export default SignupPage;
