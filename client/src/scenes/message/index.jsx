import React, { useState } from 'react';
import { FormControl, InputLabel, Box} from "@mui/material";
import axios from 'axios';

function Message() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.example.com/send-message', {
        phoneNumber,
        message,
      });
      setNotification(response.data.success);
      setIsLoading(false);
    } catch (error) {
      setNotification(error.response.data.error);
      setIsLoading(false);
    }
  };

  const sendNotification = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.example.com/send-notification', {
        message: notification,
      });
      setNotification(response.data.success);
      setIsLoading(false);
    } catch (error) {
      setNotification(error.response.data.error);
      setIsLoading(false);
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <h1>Send Message</h1>
      <FormControl sx={{ mt: "2rem" }}>
        <label htmlFor="phone-number">Phone Number:</label>
        <input
          sx={{ mt: "2rem" }}
          type="text"
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="button" onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {notification && (
          <div className="notification">
            <p>{notification}</p>
          </div>
        )}
      </FormControl>

      <h1>Send Notification</h1>
      <FormControl sx={{ mt: "1rem" }}>
        <label htmlFor="notification">Notification:</label>
        <input
          type="text"
          id="notification"
          value={notification}
          onChange={(e) => setNotification(e.target.value)}
        />

        <button type="button" onClick={sendNotification} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Notification'}
        </button>

        {notification && (
          <div className="notification">
            <p>{notification}</p>
          </div>
        )}
      </FormControl>
    </Box>
  );
}

export default Message;
