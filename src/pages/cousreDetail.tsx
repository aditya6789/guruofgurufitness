"use client";
import { getCourse } from "@/api/courseApi";
import ContainerWrapper from "@/containerWrapper";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import  { useEffect, useState } from "react";

type Props = {};

function CourseDetailPage({}: Props) {
  const { id } = useParams();
  console.log(id);

  const [coursedata, setData] = useState<any>(null);

  useEffect(() => {
    // console.log("Fetching course with ID:", coursesId);
    const fetchCourse = async () => {
      try {
        const course = await getCourse(id as string);
        // console.log("Received course data:", course);
        setData(course);
      } catch (error: any) {
        console.error("Error fetching course:", error.message);
      }
    };

    fetchCourse();
  }, [id]);
  console.log("Data:", coursedata);

  if (!coursedata) {
    return <p>Loading...</p>;

    // Convert binary image data to base64 string
  }
  const { contentType, data } = coursedata.course.img;
  const base64ImageData = `data:${contentType};base64,${btoa(
    data.data.reduce((acc :any , byte:any) => acc + String.fromCharCode(byte), '')
  )}`;

  return (
    <div>
      <ContainerWrapper>
        <div className="flex justify-start items-start gap-10 mt-10">
          <img src={base64ImageData} alt="" className="rounded-3xl max-w-[700px] h-[500px]"  />
          <div className="ml-[30px]">
            <h1 className="text-4xl uppercase font-bold">
              {coursedata.course.name}
            </h1>
            <h3 className="text-xl uppercase text-gray-400 font-semibold mt-5">
              Join the Course
            </h3>
            <Button className="mt-10">Coming Soon</Button>
          </div>
          {/* Render other course details as needed */}
        </div>
        <Title name="about" />
        <p className="text-xl text-start ">{coursedata.course.about}</p>
        <Title name="Program Details" />
        <div className="w-[500px] shadow-lg p-8 mb-5">
      
          
          <div className="flex justify-between items-center text-md ">
            <h2>Eligibility:</h2>
            <h2>{coursedata.course.eligibility}</h2>
          </div>
          <div className="bg-gray-400 h-[1px] my-5"></div>
          <div className="flex justify-between items-center text-md ">
            <h2>Weekday Batch:</h2>
            <h2>{coursedata.course.weekdays_batch}</h2>
          </div>
          <div className="bg-gray-400 h-[1px] my-5"></div>
          <div className="flex justify-between items-center text-md ">
            <h2>Weekend Batch:</h2>
            <h2>{coursedata.course.weekends_batch}</h2>
          </div>

          <h1 className="text-2xl my-5 font-bold text-violet-600 text-start">Validity</h1>
          <div className="bg-gray-400 h-[1px] my-5"></div>
          <div className="flex justify-between items-center text-md ">
            <h2>Guru Fitness:</h2>
            <h2>{coursedata.course.validity} years</h2>
          </div>
      
        <div className="bg-gray-400 h-[1px] my-5"></div>
          <div className="flex justify-between items-center text-md ">
            <h2>NDSC:</h2>
            <h2>lifetime</h2>
          </div>
          </div>
          <Title name="Course Details" />
          <p className="mb-10 text-xl text-start">{coursedata.course.course_details}</p>

        
      </ContainerWrapper>
    </div>
  );
}

export default CourseDetailPage;
