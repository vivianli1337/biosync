// qr.js
import QrScanner from 'qr-scanner';

export function startQrScanner() {
  const videoElement = document.getElementById('qr-video');
  const resultElement = document.getElementById('qr-result');

  QrScanner.hasCamera().then(hasCamera => {
    if (hasCamera) {
      const qrScanner = new QrScanner(
        videoElement,  // Attach the video element for live camera feed
        (result) => {
          // Display the result of the QR code scan
          resultElement.textContent = `QR Code Result: ${result}`;
          console.log(`QR Code scanned: ${result}`);
        }
      );

      // Start the scanner and video feed
      qrScanner.start().catch(err => {
        console.error("QR Scanner failed to start:", err);
      });
    } else {
      console.error("No camera found");
    }
  });
}

  