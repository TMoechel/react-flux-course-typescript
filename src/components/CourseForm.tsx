import React, { FC } from "react";
import { IFormProps } from "../common/InputInterface";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import { Course } from "./Interfaces";

const CourseForm: FC<IFormProps<Course>> = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <h3>{"Title: " + props.data.title}</h3>
      <h3>{"AutorId: " + props.data.authorId}</h3>
      <h3>{"Category: " + props.data.category}</h3>

      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        value={props.data.title}
      />
      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        value={props.data.authorId}
        onChange={props.onChange}
        options={[
          { value: "", text: "" },
          { value: "1", text: "Cory House" },
          { value: "2", text: "Scott Allen" },
        ]}
      />
      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.data.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
