// components/AddCourseForm.tsx
"use client";
import React, { useState, } from "react";
// import { Button } from "@nextui-org/react";
import { submitCourse } from "@/api/courseApi"; // Assuming you have an updateCourse function


interface CourseFormData {
  name: string;
  about: string;
  validity: string;
  eligibility: string;
  weekdays_batch: string;
  weekends_batch: string;
  course_details: string;
  img: File | null;
}

const AddCourseForm = () => {
  const [formData, setFormData] = useState<CourseFormData>({
    name: "",
    about: "",
    eligibility: "",
    validity: "",
    weekdays_batch: "",
    weekends_batch: "",
    course_details: "",
    img: null,
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevFormData) => ({ ...prevFormData, img: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("about", formData.about);
      formDataToSend.append("validity", formData.validity);
      formDataToSend.append("eligibility", formData.eligibility);
      formDataToSend.append("weekdays_batch", formData.weekdays_batch);
      formDataToSend.append("weekends_batch", formData.weekends_batch);
      formDataToSend.append("course_details", formData.course_details);
      if (formData.img) {
        formDataToSend.append("img", formData.img);
      }

      // Decide whether to submit or update based on initialData prop
 
        await submitCourse(formDataToSend);
   
      setFormData({
        name: "",
        about: "",
        eligibility: "",
        validity: "",
        weekdays_batch: "",
        weekends_batch: "",
        course_details: "",
        img: null,
      });

      // onSubmit();
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full m-10 mt-8" encType="multipart/form-data" action="/upload">
      <div className="flex justify-between items-center">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Image
        </label>
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
        <div className="w-full ml-10">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Course Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-600">
            About
          </label>
          <input
            type="text"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
      </div>
      <div className="flex justify-start gap-5 items-center">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Age Requirement
          </label>
          <input
            type="number"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Validity
          </label>
          <input
            type="text"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            className="w-full p-2 mb-4 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
      </div>

      <label className="block mb-2 text-sm font-medium text-gray-600">
        Weekdays Batch
      </label>
      <textarea
        name="weekdays_batch"
        value={formData.weekdays_batch}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-2 rounded-lg  border-gray-300 focus:outline-none focus:border-indigo-500"
        required
      />
      <label className="block mb-2 text-sm font-medium text-gray-600">
        Weekends Batch
      </label>
      <textarea
        name="weekends_batch"
        value={formData.weekends_batch}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-2 rounded-lg  border-gray-300 focus:outline-none focus:border-indigo-500"
        required
      />

      <label className="block mb-2 text-sm font-medium text-gray-600">
        Details
      </label>
      <textarea
        name="course_details"
        value={formData.course_details}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-2 rounded-lgs  border-gray-300 focus:outline-none focus:border-indigo-500"
        required
      />

      <button  type="submit">Submit</button>
    </form>
  );
};

export default AddCourseForm;
