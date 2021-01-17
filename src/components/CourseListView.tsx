import React, { FC } from "react";
import { CourseList } from "./Interfaces";
import { Link } from "react-router-dom";

const CourseListView: FC<CourseList> = (props) => {
  return (
    <>
      <h2> Courses Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courseData.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={"/course/" + course.slug}> {course.title} </Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p> Content of the Courses Page</p>
    </>
  );
};

export default CourseListView;
