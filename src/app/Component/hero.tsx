// import React from "react"
// // import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import backgroundImg from "../../../Public/Images/background.jpg"


// export  default function HeroSection() {
//   return (
//     <div className="relative min-h-[600px] w-full bg-[#FDF8F4]">
//       <div className="container grid gap-8 py-12 md:grid-cols-2 md:py-24">
//         <div className="relative h-[400px] md:h-[500px]">
//           <Image
//             src={backgroundImg}
//             alt="Modern rattan chair with plant"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//         <div className="flex flex-col justify-center space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-lg font-medium text-neutral-600">New Arrival</h2>
//             <h1 className="text-4xl font-bold text-amber-600 md:text-5xl lg:text-6xl">
//               Discover Our
//               <br />
//               New Collection
//             </h1>
//             <p className="max-w-[600px] text-neutral-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
//             </p>
//           </div>
//           <Button className="w-fit bg-amber-600 hover:bg-amber-700" size="lg">
//             BUY NOW
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }
import Image from "next/image";
import HeroImage from "../../../Public/Images/background.jpg";
import "../Style/hero.css";
export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="heroImage">
        <Image
          src={HeroImage}
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <div className="heroText bg-[#FFF3E3]">
          <h6>New Arrival</h6>
          <h3>Discover Our <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore</p>
            <button className=" buyBtn">BUY NOW</button>
        </div>
      </div>
    </>
  );
}
