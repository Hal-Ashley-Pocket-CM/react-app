import React from 'react';
import './clientList.css';
const CheckIn = props => {
  return (
    <li
      id={props.id}
      key={props.id}
      onClick={() => props.handleSelectCheckIn(props.id, props.checkIn)}
    >
      <a href="#">{props.checkIn}</a>
    </li>
  );
};

export default CheckIn;
