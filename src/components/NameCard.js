import React from 'react';
import './clientList.css';
const NameCard = props => {
  return (
    <li
      className="list-group-item"
      id={props.id}
      key={props.id}
      onClick={() =>
        props.handleClick(props.id, props.name, props.phone, props.checkIns)
      }
    >
      <a href="#">{props.name}</a>
    </li>
  );
};

export default NameCard;
