import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import Image from "next/image"

// import {Divider} from "@nextui-org/react";
import { Button } from "./ui/button";
import { CiWifiOn } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
interface ICustomCard {
  imageData?: {
    contentType: string;
    data: {
      data: number[];
      type: string;
    };
  };
}

const CustomCard = ({ imageData }: ICustomCard) => {
  if (!imageData) {
    return <div>No image data provided</div>;
  }

  const { contentType, data } = imageData;

  // Convert binary image data to base64 string
  const base64ImageData = `data:${contentType};base64,${btoa(
    data.data.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
  )}`;


  return (
    <Card>
      <CardHeader>
        <img
          src={base64ImageData}
          alt="image"
          className="max-w-[250px] h-[200px] rounded-xl"
        />
      </CardHeader>

      <CardContent>
        <div className="px-3 py-4 ">
          {/* <Divider className="my-4" /> */}

          <div className="flex justify-start items-center gap-5 text-[16px] font-medium mb-2">
            <CiClock2 />
            Weekdays,Weekends
          </div>

          <div className="flex justify-start items-center gap-5 text-[16px] font-medium mb-2">
            <CiWifiOn />
            Online | Offline
          </div>

          <div className="flex justify-start items-center gap-5 text-[16px] font-medium mb-2">
            <PiCertificateLight />
            ASE,NSDc
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Coming Soon</Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
