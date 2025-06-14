import Image from "next/image";
import CircleImage from '../public/circles.png'

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={CircleImage}
        height={200}
        width={260}
        className="w-full h-full"
        alt=""
      />
    </div>
  )
};

export default Circles;
