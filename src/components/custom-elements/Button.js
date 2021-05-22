import React from "react";

const Button = ({ callback, btnText }) => {
  return (
    <button className="btn btn-primary" onClick={callback}>
      {btnText}
    </button>
  );
};

export default Button;
