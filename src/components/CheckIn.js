import React from 'react';
import './clientList.css';
const CheckIn = props => {
  return (
    <li
      id={props.id}
      key={props.id}
      onClick={() =>
        props.handleSelectCheckIn(props.id, props.lattitude, props.longitude)
      }
    >
      <a href="#">
        {props.lattitude},{props.longitude}
      </a>
    </li>
  );
};

export default CheckIn;
