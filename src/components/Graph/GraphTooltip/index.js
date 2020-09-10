import React from 'react';

const GraphTooltip = ({ active, payload, label }) => {
  console.log(active, payload, label)
    if (active) {
      return (
        <div>
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

export default GraphTooltip;