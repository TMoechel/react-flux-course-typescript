import React, { FC, useState } from "react";
import { RouteComponentProps } from "react-router";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import { Course } from "./Interfaces";
import * as courseApi from "../api/courseApi";

interface Props extends RouteComponentProps<MatchParams> {
  Course: Course;
}

interface MatchParams {
  slug: string;
}

const ManageCoursePage: FC<Props> = (props) => {
  // array destructuring
  const [course, setCourse] = useState<Course>({
    category: "",
    id: 0,
    title: "",
    authorId: 0,
    slug: "",
  });

  // destructuring e.currentTarget !
  //const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
  const handleCourseChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const controlToUpdateName = currentTarget.name;
    const updatedCourse = {
      ...course,
      [controlToUpdateName]: currentTarget.value, //using javascript computed property (not array)
    };
    setCourse(updatedCourse);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    courseApi.saveCourse(course);
  };

  return (
    <>
      <h2> Manage Course </h2>
      {/* <Prompt when={true} message="Sure you want to leave" /> 
      {props.match.params.slug}  */}
      <CourseForm
        data={course}
        onChange={handleCourseChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
