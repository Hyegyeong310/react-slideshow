import React from 'react';

const RightArrow = props => {
  return (
    <div className="nextArrow arrow" onClick={props.handleNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
