import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const NotificationsContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  padding:  10px 2px;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 0px;
  overflow: hidden;
`;

const NotificationList = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const NotificationItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NotificationText = styled.div`
  font-size: 16px;
  color: #333;

  strong {
    color: #007bff;
  }
`;

const sampleNotifications = [
  {
    id: 1,
    type: "Booking Confirmation",
    message:
      "Booking confirmed! Driver: John Doe, Vehicle: Toyota Innova - MH12AB1234.",
  },
  {
    id: 2,
    type: "ETA Update",
    message: "Your driver is 5 minutes away from the Main Gate.",
  },
  {
    id: 3,
    type: "Ride Status",
    message: "Please click 'End Trip' if you've reached your destination.",
  },
  {
    id: 4,
    type: "Vehicle Availability",
    message: "Cars are available for booking now.",
  },
];

const NotificationsPage = () => {
  const [notifications] = useState(sampleNotifications);

  return (
    <NotificationsContainer>
      <Header>Notifications</Header>
      <NotificationList>
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <NotificationItem key={notif.id}>
              <NotificationText>
                <strong>{notif.type}:</strong> {notif.message}
              </NotificationText>
            </NotificationItem>
          ))
        ) : (
          <NotificationItem>
            <NotificationText>No notifications yet.</NotificationText>
          </NotificationItem>
        )}
      </NotificationList>
    </NotificationsContainer>
  );
};

export default NotificationsPage;

