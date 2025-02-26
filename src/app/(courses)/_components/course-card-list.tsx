/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";

import { CourseCard } from "./course-card";
import { API_URL } from "@/configs/global";

type CourseCardListProps = {
  courses: CourseSummary[];
};

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/courses/newest/${count}`, {
    // cache: 'no-store', //no data will be cached and this is dynamic
    next: {
      // revalidate: 0, //no data will be cached and this is dynamic
      revalidate: 24 * 60 * 60, //based on seconds will be revalidated
    },
  });
  return response.json();
}

export const CourseCardList: React.FC<CourseCardListProps> = async ({
  courses,
}) => {
  const newestCoursesData = await getNewestCourses(4);

  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
