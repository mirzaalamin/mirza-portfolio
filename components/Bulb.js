import Image from "next/image";
import blubImage from '../public/bulb.png'

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={blubImage}
        height={200}
        width={260}
        className="h-full w-full"
        alt="bulb"
      />
    </div>
  )
};

export default Bulb;
