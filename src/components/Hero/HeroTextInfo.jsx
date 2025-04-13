import Image from "next/image";
import { Button } from "../ui/button";
import CountPart from "@components/Counting/CountPart";
import Link from "next/link";

const HeroTextInfo = () => {
  return (
    <div className="flex-1 px-4 md:px-8 py-8">
      <div className="flex items-center gap-3 mb-4">
        <h4 className="text-2xl font-semibold text-[#0282a9]">
          Welcome to Avenue
        </h4>
        <Image
          src="https://i.ibb.co.com/LhZL9qxp/blue-stethoscope-isolated-on-a-white-background-3d-image-2-BEKA6-F-removebg-preview.png"
          width={60}
          height={60}
          alt="Doctor equipment"
          className="object-contain"
        />
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Your Health, Your Schedule
        <br className="hidden md:block" />
        <span className="text-[#0282a9]"> Book Appointments Hassle-Free!</span>
      </h1>

      <p className="text-gray-700 text-lg mb-8 max-w-2xl">
        Finding the right doctor has never been easier. Book appointments with
        top healthcare professionals in just a few clicks. No long waits, no
        hassle—just quality care at your convenience.
      </p>

      <Link href="/appointment">
        <Button variant="primary" size="lg" className="rounded-full px-6 py-3 text-base">
          Meet a Doctor
        </Button>
      </Link>
    </div>
  );
};

export default HeroTextInfo;
