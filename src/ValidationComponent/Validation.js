import React from "react";

const validation = props => {
  let validationMessage = "Message long enough";

  if (props.inputLength <= 5) {
    validationMessage = "Message too short";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
