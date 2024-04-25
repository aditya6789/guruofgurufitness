"use client";
import { useState, useEffect } from "react";
import CoursesCard from "@/components/dashboard/coursesCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllCourses } from "@/api/courseApi";

const CoursesPage = () => {
  const [courses, setCourses] = useState<ICoursesCardProps[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<ICoursesCardProps[]>([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    // Fetch courses when the component mounts
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setCourses(data.courses);
      } catch (error: any) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    // Filter courses based on the filter value
    setFilteredCourses(
      courses.filter((course) =>
        course.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }, [courses, filterValue]);

  const handleButtonClick = () => {
    window.location.href = "course/addcourse";
  };

  return (
    <div>
      <div className="flex justify-start gap-10 items-center m-5">
        <Input
          placeholder="Filter Courses..."
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <Button className="justify-end" onClick={handleButtonClick}>
          Add Course
        </Button>
      </div>

      <div className="grid grid-rows-4  grid-flow-col gap-4">
        {filteredCourses.map((course) => (
          <CoursesCard
          courseId={course._id}
          imageData={course.img}
            key={course._id}
            eligibility={course.eligibility}
            name={course.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;



export interface ICoursesCardProps {
  _id: string;
  name: string;
  about: string;
  validity: string;
  eligibility: string;
  weekdays_batch: string;
  weekends_batch: string;
  course_details: string;
  img:{
    contentType: string;
    data: {
      data: number[];
      type: string;
    };
    
  };
  // other properties...
}
