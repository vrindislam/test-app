import React from 'react';

const ProgressBar = ({index, onClick}) => {
  return (
    <div className='slider-indicator' onClick={onClick}>
      <span className={index === 0 ? 'marker current' : 'marker'}/>
      <span className={index === 1 ? 'marker current' : 'marker'}/>
      <span className={index === 2 ? 'marker current' : 'marker'}/>
    </div>
  );
};

export default ProgressBar;