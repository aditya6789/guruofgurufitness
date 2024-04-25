import React from 'react';

// import { AlertDialogFooter, AlertDialogHeader } from '../ui/alert-dialog';
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
// import { Button } from '@nextui-org/react';

// import Edit from "../../../public/icons/icons8-edit.svg";
import Delete from  "../../../public/icons/icons8-delete.svg";


import { deleteCourse } from '@/api/courseApi';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface ICourseCard {
  name: string;
  courseId:string;
  eligibility: string;
  imageData?: {
    contentType: string;
    data: {
      data: number[];
      type: string;
    };
  };
}

const CoursesCard: React.FC<ICourseCard> = ({ name, eligibility, imageData , courseId}) => {
  if (!imageData) {
    return <div>No image data provided</div>;
  }

  const { contentType, data } = imageData;
  console.log(courseId)


  // Convert binary image data to base64 string
  const base64ImageData = `data:${contentType};base64,${btoa(
    data.data.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
  )}`;

  const handleDelete = async () => {
    try {
      await deleteCourse(courseId); // Call deleteCourse function with courseId
      // Optionally, you can perform any necessary UI updates after successful deletion
    } catch (error:any) {
      console.error("Error deleting course:", error.message);
    }
  };
  return (
    <div className="h-[170px] w-[280px] bg-white_light m-10 px-6 py-1 rounded-lg">
      <div>
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="mt-3 font-semibold text-xl">{name}</h3>
            <p className="mt-2 font-medium text-sm">Due Date : 10 Nov</p>
          </div>
          {/* Display the image */}
          <img src={base64ImageData} alt={name} className="" width={100} height={100} />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="mt-2 font-medium text-sm">
            Age <span>{eligibility}+</span>
          </h3>
          <h3 className="mt-2 mb-5 font-medium text-sm">
            Eligibility: <span>{eligibility}+</span>
          </h3>
        </div>
        <div className="flex justify-start items-center gap-3">
          <Link to={"/admin/dashboard/addcourse"}>
          {/* <Button
            isIconOnly
            variant="flat"
            color="primary"
            aria-label="Like"
            className=""
            >
            <Image src={Edit} alt="" className="h-5 w-5" />
          </Button> */}
            </Link>
            <Button
             onClick={handleDelete} 
    

            color="primary"
            aria-label="Like">
            <img src={Delete} alt="" className="h-5 w-5" />
              
            </Button>
        </div>
        
        {/* Rest of your component */}
      </div>
    </div>
  );
};

export default CoursesCard;
