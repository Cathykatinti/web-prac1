import React from 'react';

export default function Home(){
    return (
      <div>
        We are located at .........
        <div>Goal: To heal every soul</div>
        <div>Mission: To ensure healthy living across all individuals</div>
        <div>Vision: Medical assistance to all</div>
        {/*  We are the Doctor Touch hospital for you available all time out .
            We tresure  */}
      </div>
    );
}

// import * as React from "react";
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselDemo() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [1, 2, 3, 4, 5]; // Number of carousel items

//   // Image paths for each card
//   const images = [
//     "/images/doctor.jpg",
//     "/images/services.jpg",
//     "/images/health-tips.jpg",
//     "/images/clinic-hours.jpg",
//     "/images/contact-us.jpg",
//   ];

//   // Autoplay function
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, 10000); // Change slide every 10 seconds

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, [items.length]);

//   return (
//     <div className="w-full h-full relative overflow-hidden">
//       {/* Parent div full width and height */}
//       <Carousel className="w-full h-full">
//         <CarouselContent className="w-full h-full flex transition-transform duration-1000" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//           {items.map((_, index) => (
//             <CarouselItem
//               key={index}
//               className="w-full h-full flex-shrink-0"
//             >
//               <div
//                 className="p-1 h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${images[index]})` }}
//               >
//                 <Card className="h-full bg-opacity-60">
//                   <CardContent className="flex items-center justify-center p-6 h-full text-white bg-black bg-opacity-40">
//                     {/* Card content */}
//                     {index === 0 && (
//                       <div className="text-center">
//                         <h2 className="text-2xl font-bold">Dr. Mugabe Job Jovin Abwooli</h2>
//                         <p className="mt-4 text-lg">
//                           Leading healthcare specialist with over 20 years of experience.
//                         </p>
//                       </div>
//                     )}
//                     {index === 1 && (
//                       <div className="text-center">
//                         <h2 className="text-2xl font-bold">Our Services</h2>
//                         <ul className="mt-4 text-lg list-disc pl-5">
//                           <li>General Consultation</li>
//                           <li>Cardiology</li>
//                           <li>Pediatrics</li>
//                           <li>Surgery</li>
//                         </ul>
//                       </div>
//                     )}
//                     {index === 2 && (
//                       <div className="text-center">
//                         <h2 className="text-2xl font-bold">Health Tips</h2>
//                         <p className="mt-4 text-lg">
//                           Stay hydrated, exercise regularly, and get regular health checkups.
//                         </p>
//                       </div>
//                     )}
//                     {index === 3 && (
//                       <div className="text-center">
//                         <h2 className="text-2xl font-bold">Clinic Hours</h2>
//                         <p className="mt-4 text-lg">
//                           Monday - Friday: 8:00 AM - 5:00 PM
//                           <br />
//                           Saturday: 9:00 AM - 1:00 PM
//                         </p>
//                       </div>
//                     )}
//                     {index === 4 && (
//                       <div className="text-center">
//                         <h2 className="text-2xl font-bold">Contact Us</h2>
//                         <p className="mt-4 text-lg">
//                           Phone: +123-456-7890
//                           <br />
//                           Email: info@clinic.com
//                         </p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }
