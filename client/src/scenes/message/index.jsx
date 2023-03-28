import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = { phoneNumber, message };
    try {
      const response = await axios.post('https://your-api-url.com/send-message', payload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;
