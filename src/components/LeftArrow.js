import React from 'react';

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={props.handlePrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
