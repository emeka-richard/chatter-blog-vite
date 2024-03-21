import React from 'react';
import './spinner.css'; // Import CSS file for styling

const Spinner: React.FC = () => {
  return (
    <div data-testid="spinner-item" className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
