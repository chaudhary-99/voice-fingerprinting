import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this to handle navigation
import './AlreadyRegistered.css';

const AlreadyRegistered = () => {
  const [isListening, setIsListening] = useState(false);
  const [speechText, setSpeechText] = useState('');
  const [fingerprintData, setFingerprintData] = useState(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();  // Use this for navigation

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            setSpeechText((prev) => prev + event.results[i][0].transcript);
          }
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognitionRef.current = recognition;
    } else {
      console.error('Web Speech API is not supported by this browser.');
    }
  }, []);

  const handleStartSpeaking = () => {
    setIsListening(true);
    recognitionRef.current.start();
  };

  const handleStopSpeaking = async () => {
    setIsListening(false);
    recognitionRef.current.stop();

    // Simulate fingerprint lookup with dummy data
    const fingerprint = await findFingerprintInDatabase(speechText);
    setFingerprintData(fingerprint);

    // Navigate to the user details page
    navigate('/user-details');
  };

  const findFingerprintInDatabase = async (speech) => {
    const mockDatabase = {
      'hello': 'Fingerprint ID: 123, Name: John Doe',
      'how are you': 'Fingerprint ID: 456, Name: Jane Smith',
    };

    const matchingEntry = Object.keys(mockDatabase).find((key) =>
      speech.toLowerCase().includes(key)
    );

    return matchingEntry ? mockDatabase[matchingEntry] : 'No matching fingerprint found.';
  };

  return (
    <div className="already-registered-container">
      <h2>Already Registered User</h2>

      <button 
        className="speak-btn" 
        onClick={handleStartSpeaking} 
        disabled={isListening}
      >
        {isListening ? 'Listening...' : 'Start Speaking'}
      </button>

      <div className="speech-text">
        <p>{speechText}</p>
      </div>

      {speechText && (
        <button 
          className="stop-find-btn" 
          onClick={handleStopSpeaking}
        >
          Stop and Find Fingerprint
        </button>
      )}

      {fingerprintData && (
        <div className="fingerprint-result">
          <h3>Matching Fingerprint:</h3>
          <p>{fingerprintData}</p>
        </div>
      )}
    </div>
  );
};

export default AlreadyRegistered;
