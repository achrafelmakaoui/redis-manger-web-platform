// DropDownContent.js
import React from 'react';
import './DrowDopn.css'; // Import the stylesheet for the dropdown

const DropDownContent = ({ onClose }) => {
  // ... (existing code)
  const handleItemClick = (action) => {
    // Add your logic here based on the clicked item
    // For example, you can perform some actions or navigate to another page
    console.log(`Clicked on ${action}`);
    onClose();
  };

  return (
    <div className="dropdown-content">
      <div className="dropdown-item" onClick={() => handleItemClick('Option 1')}>
        Option 1
      </div>
      <div className="dropdown-item" onClick={() => handleItemClick('Option 2')}>
        Option 2
      </div>
      {/* Add more options as needed */}
    </div>
  );
};

export default DropDownContent;
