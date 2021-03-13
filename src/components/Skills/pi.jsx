import React from "react";
import "./pi.css";

function Pi({ percentage, bg }) {
  return (
    <div class="flex-wrapper">
      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart green">
          <path
            class="circle-bg"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class="circle"
            stroke-dasharray={`${bg}, 100`}
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" class="percentage">
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Pi;
