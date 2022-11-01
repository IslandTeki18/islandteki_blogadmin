import React from "react";

const InputLabel = (props) => {
  return (
    <div className="dkInputLabel">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.inputType}
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={`form-control ${props.className ? props.className : ""}`}
      />
    </div>
  );
};

export default InputLabel;
