import Image from "next/image";
import Link from "next/link";
import RoudedText from '../public/rounded-text.png'
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/work'} className="relative h-[185px] w-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image
          src={RoudedText}
          width={141}
          height={148}
          alt="Project button"
          className="animate-spin-slow h-full w-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
