import React from 'react';
import Description from './Desc';
const Certificate = () => {
  return (
    <div className="flex-container-row">
      <div className="width-60">
        <img src="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/3--certificado.jpg?alt=media&token=f2630456-8d5e-40c9-b4a0-5b9fed66a452" alt="Logo" className="image-resposive" />
      </div>
      <Description />
    </div>
  );
};

export default Certificate;
