import React from 'react';
import certi from '../img/cert-jenny-sandoval.jpg';
import Description from './Description';
const Certificate = () => {
  return (
    <div className="flex-container-row">
      <div className="width-60">
        <img src={certi} alt="Logo" className="image-resposive" />
      </div>
      <Description />
    </div>
  );
};

export default Certificate;
