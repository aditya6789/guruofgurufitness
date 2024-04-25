"use client";
import HeroSlider from "@/components/heroSlider";
import Title from "@/components/title";
import Image1 from "../../public/images/image1.jpg"
import Image2 from "../../public/images/image2.jpg"
import Image3 from "../../public/images/image3.jpg"
import Image4 from "../../public/images/image4.jpg"
import OurStoryImage from "../../public/images/our_story.jpg"
import ContainerWrapper from "../containerWrapper";
import CustomCard from "@/components/customCard";
// import { Button } from "@nextui-org/react";
// import { ImageSlider } from "@/components/imageSlider";
// import Image from "next/image";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
import useDownloader from "react-use-downloader";
import { useEffect, useState } from "react";
import { getAllCourses } from "@/api/courseApi";
import { Link } from "react-router-dom";
import { ICoursesCardProps } from "@/interferance/course";
import { Button } from "@/components/ui/button";
// import { ICoursesCardProps } from "../admin/dashboard/course/page";
// import Link from "next/link";

const imagesData = [Image1, Image2, Image3, Image4];

const StoryPointsData = [
  {
    title: "Upholding international standards for trainers within India",
  },
  {
    title: "Staying updated on evolving fitness trends and technologies",
  },
  {
    title: "Advocating for safe  and effective training practices for everyone",
  },
  {
    title:
      " Encouraging an active and healthy lifestyle for individuals across society",
  },
];

const bestPointData = [
  {
    title:
      "Accreditation - International (ACE, EREPS) and National (NSDC Govt. of India, Guru Fitness Certificate, Beauty & Wellness Sector Skill Council)",
  },
  {
    title:
      "The ONLY fitness academy in India to have their course content approved by Europen Register of Exercise Professionals (EREPS) and National Skill Development Corporation (NSDC)",
  },
  {
    title:
      "In house team that creates and updates course content/material at par with international guidelines and standards.",
  },
  {
    title:
      "Well qualified and trained teachers who are constantly adding and updating their knowledge pool",
  },
  {
    title: "Provide job placement - National and International",
  },
  {
    title:
      "The ONLY fitness academy which have his own Fitness Convention named Asia Edu-Fit Summit in India with international and National presenters",
  },
];

const HomePage = () => {
  const [courses, setCourses] = useState<ICoursesCardProps[]>([]);

  // const courses=useSelector((store:RootState)=>store.courseSlice);
  // console.log(courses);
  const {  download,  } =
    useDownloader();

  const fileUrl = "/app-release.apk";
  const filename = "app-release.apk";
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
  console.log(courses);
  return (
    <div>
      <HeroSlider images={imagesData} />
      <ContainerWrapper>
        {/* our Courses */}
        <section className="mb-10">
          <div data-aos="fade-up" data-aos-delay="300">
            <Title
              name="Our Courses"
              desc="Choose any certification course to kickstart your fitness journey."
            />
          </div>
          <div className="flex justify-between items-center">
            {courses.slice(0, 3).map((course, index) => (
            <Link to={`/course/${course._id}`}>
                <CustomCard imageData={course.img} key={index} />
              </Link>
            ))}
          </div>
        </section>
        <section className="flex justify-between items-center mb-20 ">
          <div>
            <div data-aos="fade-up" data-aos-delay="300">
              <Title
                name="GURU OF GURU FITNESS"
                desc="India's Leading Fitness Traning & Education Academy"
              />
            </div>
            <p
              className="w-[500px] text-[14px] text-start font-medium text-gray-500 "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Guru of Guru Fitness emerged with a vision to foster awareness and
              knowledge within the fitness community. Comprising a team of
              seasoned and well-qualified fitness professionals, our dedication
              lies in delivering top-notch education through both theoretical
              and practical approaches, all while upholding international
              standards. As India's foremost fitness training and education
              academy, Guru of Guru Fitness embraces a curriculum rooted in
              science-backed practices. With a legacy spanning over a decade, we
              take pride in producing over 25,000 certified students for the
              fitness industry. Our team, composed of fitness experts and
              educators, is fueled by a shared passion for education and
              fitness, striving to provide excellence in education while
              upholding global benchmarks. For those envisioning a career in
              fitness, your journey begins with us at Guru of Guru Fitness!
            </p>
            <Button
              color="primary"
              className="mt-5 px-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Explore Us
            </Button>
          </div>
          <iframe
            src="https://www.youtube.com/watch?v=eAlNvWgTDZQ"
            data-aos="fade-left"
            data-aos-delay="500"
          ></iframe>
        </section>
        <section className="mb-20">
          <div data-aos="fade-up" data-aos-delay="300">
            <Title
              name="Our Story"
              desc="Our goal is to disseminate accurate knowledge about fitness."
            />
          </div>
          <div
            className="flex justify-start items-center gap-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={OurStoryImage}
              alt=""
              className="max-w-80 h-full ml-10"
            />
            <div
              className="w-[700px] ml-10 flex flex-col justify-start items-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <ul className="list-disc ">
                {StoryPointsData.map((point) => (
                  <li className="text-start">{point.title}</li>
                ))}
              </ul>
              <p
                className="text-[14px] text-start font-medium text-gray-500 mt-10"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                The inception of a significant vision occurred in a college
                canteen in 2009, giving rise to the remarkable journey of Guru
                of Guru Fitness. Founded by visionary directors, the institution
                has played a pivotal role in educating numerous students on
                training methodologies, instilling relevant knowledge, and
                cultivating the art of transforming lifestyles. In a mere 14
                years, Classic Fitness Academy has evolved into India's premier
                hub for teaching and training in the fitness domain. The core
                objective is to bridge the divide between professionally trained
                fitness instructors and the dynamic fitness industry. Our
                comprehensive courses encompass various job profiles, including
                personal trainers, fitness trainers, and nutritionists at
                different proficiency levels. Affiliated with esteemed American
                and European bodies such as ACE and EREPS, we take pride in
                being a skilling partner for NSDC and SPEFL. This affiliation
                not only enables us to confer certifications but also empowers
                us to provide diplomas in the diverse field of fitness. At Guru
                of Guru Fitness, we are dedicated to shaping skilled and
                competent professionals who contribute to the flourishing
                fitness landscape.
              </p>
              <Button color="primary" className="mt-5 px-10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 p-5 mt-10 mb-20">
          <div data-aos="fade-up" data-aos-delay="300">
            <Title name="WHY WE ARE BEST IN INDUSTRY" />
          </div>
          <div
            className="flex justify-start items-center gap-10"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img src={Image2} alt="" className="max-w-80 h-full" />
            <div className="ml-10 flex flex-col justify-start items-start" data-aos="fade-up" data-aos-delay="500">
              <ul className="list-disc">
                {bestPointData.map((point) => (
                  <li className="text-[14px] text-start font-medium mb-5">
                    {point.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ContainerWrapper>
      <section className="bg-[url('/images/moblie.png')] h-screen w-full my-20 relative">
        <div className="">
          <Button
            className="absolute z-10 left-20 top-[600px] "
            // variant="solid"
            color="primary"
            onClick={() => download(fileUrl, filename)}
          >
            Download Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
