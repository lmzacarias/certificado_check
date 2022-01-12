import React from 'react';
import certi from '../img/animacion-certi.jpg';
import Description from './Desc';
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
