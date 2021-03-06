import React from 'react';
import Description from './Description';
const Certificate = () => {
  return (
    <div className="flex-container-row">
      <div className="width-60">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/2--certificado.jpg?alt=media&token=d46d11b5-acce-49f1-ba02-b9a4ccddfeaf"
          alt="Logo"
          className="image-resposive"
        />
      </div>
      <Description />
    </div>
  );
};

export default Certificate;
