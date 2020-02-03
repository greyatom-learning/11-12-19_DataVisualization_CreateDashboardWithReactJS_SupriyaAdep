import React from 'react';
import './Button.css';

// Group of Buttons
export const CButtonGroup = props => {
  return <div className="cbutton-group">{props.children}</div>;
};

// Single Button
export const CButton = props => {
  return (
    <button
      onClick={props.clicked}
      className={`cbutton ${props.btnType}  ${props.active ? 'active' : ''}`}
    >
      {props.children}
    </button>
  );
};
