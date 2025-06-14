import Image from "next/image";
import heroImage from '../public/avatar.png'


const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={heroImage}
        alt="Hero image"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  )
};

export default Avatar;
