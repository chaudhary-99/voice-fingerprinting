import React, { useState } from 'react';
import './RegisterUser.css';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNameSubmit = () => {
    setIsNameSubmitted(true);
  };

  const handleStartListening = () => {
    setIsListening(true);
    setShowConfirmation(false); // Hide confirmation message when starting listening
  };

  const handleStopListening = () => {
    setShowConfirmation(true);  // Show confirmation when stop is clicked
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      // Show an alert for successful storage
      alert('Thank you! Your voice fingerprint has been successfully saved.');
      setIsListening(false);
      setShowConfirmation(false);
    } else {
      // If user clicks No, resume listening mode
      setIsListening(true);
      setShowConfirmation(false);
    }
  };

  return (
    <div className="register-container">
      {!isNameSubmitted ? (
        <div className="name-input-section">
          <h2>Enter your Name:</h2>
          <input 
            type="text" 
            placeholder="Enter Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="name-input" 
          />
          <button className="submit-btn" onClick={handleNameSubmit}>Submit</button>
        </div>
      ) : (
        <div className="reading-section">
          <h2>Read the Paragraph:</h2>
          <p>Hello, this is a sample paragraph. Please read this aloud to help us recognize your voice.</p>

          {/* Start Listening Button */}
          <button 
            className="listen-btn" 
            onClick={handleStartListening} 
            disabled={isListening}
          >
            {isListening ? 'Listening...' : 'Start Listening'}
          </button>

          {/* Stop button or confirmation message */}
          {isListening && !showConfirmation && (
            <button 
              className="stop-btn" 
              onClick={handleStopListening}
            >
              Stop
            </button>
          )}

          {/* Confirmation message */}
          {showConfirmation && (
            <div className="confirmation">
              <p>Did you read the whole paragraph? Your voice fingerprint could be incorrect if you did not.</p>
              <button 
                className="confirm-btn" 
                onClick={() => handleConfirmation(true)}
              >
                Yes, I finished
              </button>
              <button 
                className="cancel-btn" 
                onClick={() => handleConfirmation(false)}
              >
                No, I need to reread
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterUser;
