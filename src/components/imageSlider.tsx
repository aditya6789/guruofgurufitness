'use client';

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


interface IImage{
   src:string;
}
interface IImageSlider{
images:IImage[];

}
export function ImageSlider({images}:IImageSlider) {
  return (
    <div className="w-[1000px]">

  
    <Carousel
      opts={{
        align: "start",
        watchResize:true,
        loop: true,
      }}
      className=" max-w-sm gap-5"
    >
      <CarouselContent>
   {images.map((data,index) => (
       

          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 w-[300px]">
            <div className="">
            <img src={data.src} alt="" width={1000} height={100}/>
            </div>
          </CarouselItem>
             ))}
   
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
