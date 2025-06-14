import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials'
import Logo from '../public/logo.png'

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={Logo}
              width={220}
              height={48}
              alt="Logo"
              priority={true}
            />
          </Link>
          {/* social */}
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
