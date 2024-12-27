'use client'
import Image from 'next/image';
import Link from 'next/link';
import NavIcons from './navicons';



const Navbar = () => {

  return (
   
    <header className=" fixed top-0 left-0 w-full  z-50 flex justify-between items-center px-10 py-4 shadow-md bg-[#FFFFFF]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src={"/assets/logo.png"} 
          width={50}
          height={50}
          alt="Furniro Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-2xl font-bold text-black">Furniro</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-lg">
        <Link href="/" className="hover:text-gray-600 transition">
          Home
        </Link>
        <Link href="/list" className="hover:text-gray-600 transition">
          Shop
        </Link>
        <Link href="/blog" className="hover:text-gray-600 transition">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-gray-600 transition">
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex  space-x-6 text-lg text-black">
        <NavIcons/>
       </div>
    </header>
  );
};

export default Navbar;
