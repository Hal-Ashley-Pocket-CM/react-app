import React from 'react';
import './clientList.css';
const CheckIn = props => {
  return (
    <li
      id={Number.toString()}
      key={Number.toString()}
      onClick={() => props.handleSelectCheckIn(props.key, props.checkIn)}
    >
      <a href="#">{props.checkIn}</a>
    </li>
  );
};

export default CheckIn;
