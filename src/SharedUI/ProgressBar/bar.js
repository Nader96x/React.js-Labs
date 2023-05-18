import React from "react";

const ProgressBar = ({ label, progress }) => (
  <div className="progress-bar my-2">
    <div className="bg-light">
      <div
        className="bg-secondary text-start py-2"
        style={{ width: `${progress}%` }}
      >
        <span className="px-3 py-3 bg-dark">{label}</span>
      </div>
    </div>
  </div>
);

export default ProgressBar;
