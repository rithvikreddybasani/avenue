import Image from "next/image";
import logo from "public/assets/images/logo.jpg";

const HeroVisuals = () => {
  return (
    <div className="flex-1 flex justify-center items-center px-4 md:px-8 py-8">
      <div className="relative bg-[#dcf2f4] rounded-xl p-6 md:p-12 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] shadow-md">
        <div className="absolute inset-0 bg-[#2ac28e] rounded-xl z-0" />
        <Image
          src={logo}
          alt="Doctor"
          fill
          className="object-contain z-10 relative rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroVisuals;
