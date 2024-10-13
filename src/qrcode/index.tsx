import React, { useEffect } from 'react';
import { startQrScanner } from './qr';  // Import the function from qr.js

const QRScanner: React.FC = () => {
  useEffect(() => {
    // Initialize the QR scanner when the component is mounted
    startQrScanner();
  }, []);

  return (
    <div>
      {/* Video element to show the live camera feed */}
      <video id="qr-video" width="300"></video>
      <p id="qr-result">QR Code Result: </p>
    </div>
  );
};

export default QRScanner;


