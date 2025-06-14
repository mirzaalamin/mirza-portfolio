import Image from "next/image";
import TopImage from '../public/top-left-img.png'

const TopLeftImg = () => {
  return (
    <div className={`absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w[400px] opacity-50`}>
      <Image alt="shade-image" src={TopImage} height={400} width={400} />
    </div>
  )
};

export default TopLeftImg;
