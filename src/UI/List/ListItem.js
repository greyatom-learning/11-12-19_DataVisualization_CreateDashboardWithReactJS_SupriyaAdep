import React from 'react';

const ListGroupItem = props => {
  return (
    <div className={`list-group-custom list-group-item ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ListGroupItem;
