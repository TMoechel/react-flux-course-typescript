import React, { FC } from "react";
import { IInputProps } from "./InputInterface";

const TextInput: FC<IInputProps> = (props) => {
  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          onChange={props.onChange}
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger"> {props.error} </div>}
    </div>
  );
};

export default TextInput;
