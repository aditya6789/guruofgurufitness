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
  