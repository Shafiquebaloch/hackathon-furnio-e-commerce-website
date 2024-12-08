import Image from "next/image";
import InnerPeace from "../../../Public/Images/inspiration.png";
import SideInner from "../../../Public/Images/inspiration2.png";

const Inspiration = () => {  // Give the component a name
  return (
    <div className="slideSection bg-[#FCF8F3]">
      <div className="slideText pt-9">
        <h4 className="font-extrabold text-[2rem]">50+ Beautiful rooms inspiration</h4>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] p-2">Explore More</button>
      </div>
      <div className="slideImages">
        <Image src={InnerPeace} width={250} alt="Picture of the author" />
      </div>
      <div className="slideImages">
        <Image src={SideInner} width={250} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default Inspiration;  // Export the named function component
