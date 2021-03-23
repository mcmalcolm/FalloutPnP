import React from "react";
import styled from "styled-components";

import "./Character.css";
import { SELECT_CHARACTER } from "../../store/actions";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

const character = (props) => (
  <div className="Character" onClick={props.clicked}>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <button onClick={props.hasClicked}>Delete Me:)</button>
    <button onClick={props.hasSelected}>Select Me:) </button>
  </div>
);

export default character;
