import React from "react";

import "./AddCharacter.css";

const addCharacter = (props) => (
  <div className="AddCharacter">
    <button onClick={props.characterAdded}>Add Character</button>
  </div>
);

export default addCharacter;
