export interface CourseList {
  courseData: Course[];
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  authorId: number;
  category: string;
}
