import React from 'react';

export const Badge: React.FC = () => {
  return (
    <div className="badge-top-row">
      <div className="badge-wrapper">
        <span className="badge-text">BUILD & AUTOMATE / typescript • php • python</span>
      </div>
      
      {/* Open for Freelance Badge */}
      <div className="freelance-badge">
        <div className="freelance-dot"></div>
        <span>OPEN FOR FREELANCE</span>
        <span className="freelance-slots">• 2 slots available</span>
      </div>
    </div>
  );
};
