import Link from "next/link";
import {
  RiYoutubeLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a target="_blank" href="https://www.facebook.com/profile.php?id=100007771515748" className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </a>
      <a target="_blank" href={'https://github.com/mirzaalamin'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </a>
      <a target="_blank" href={'https://www.linkedin.com/in/mirzaalamin/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </a>

    </div>
  )
};

export default Socials;
