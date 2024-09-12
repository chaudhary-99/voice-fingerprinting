import React, { useEffect, useState } from 'react';

const UserDetails = () => {
  const [randomName, setRandomName] = useState('');
  const [randomDetails, setRandomDetails] = useState('');

  useEffect(() => {
    // Generate random name and details when component mounts
    const randomNames = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
    const randomInfo = [
      'ID: 123, Address: 123 Main St, Email: john@example.com',
      'ID: 456, Address: 456 Elm St, Email: jane@example.com',
      'ID: 789, Address: 789 Oak St, Email: alice@example.com',
      'ID: 321, Address: 321 Pine St, Email: bob@example.com',
    ];

    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setRandomName(randomNames[randomIndex]);
    setRandomDetails(randomInfo[randomIndex]);
  }, []);

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {randomName}</p>
      <p><strong>Details:</strong> {randomDetails}</p>
    </div>
  );
};

export default UserDetails;
