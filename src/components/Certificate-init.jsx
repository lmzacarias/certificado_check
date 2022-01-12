import React from 'react';
import Description from './Description-init';
const Certificate = () => {
  return (
    <div className="flex-container-row">
      <div className="width-60">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jenny-sandoval.appspot.com/o/1--certificado.jpg?alt=media&token=868ef485-83a3-4cde-8690-60978f579fa0"
          alt="Logo"
          className="image-resposive"
        />
      </div>
      <Description />
    </div>
  );
};

export default Certificate;
