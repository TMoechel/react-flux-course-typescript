import React, { FC } from "react";
import { ISelectProps } from "./InputInterface";

const SelectInput: FC<ISelectProps> = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          onChange={props.onChange}
          id={props.id}
          name={props.name}
          value={props.value || ""}
          className="form-control"
        >
          {props.options.map((option) => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
