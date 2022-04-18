import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop">
      <img src={selectedImg} alt="enlarged picture" onClick={handleClick} />
    </div>
  );
};

export default Modal;
