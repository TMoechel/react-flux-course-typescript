import React, { FC, useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseListView from "./CourseListView";
import { Course } from "./Interfaces";
import { Link } from "react-router-dom";

interface IProps {}

const CoursesPage: FC<IProps> = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      const courseData = _courses as Course[];
      setCourses(courseData);
    });
  }, []);

  return (
    // props contains a property courseData
    // const CourseListView: FC<CourseList> = (props) => {
    // export interface CourseList {courseData: Course[];}
    <React.Fragment>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseListView courseData={courses} />
    </React.Fragment>
  );
};
export default CoursesPage;
