import React from 'react';

const NameCard = props => {
  return (
    <li
      className="list-group-item"
      id={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <a href="#">{props.name}</a>
    </li>
  );
};

export default NameCard;
