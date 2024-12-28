import Link from 'next/link';
import { useRouter } from 'next/navigation';
import signin from '../../public/assets/sign-in.png'
import search from '../../public/assets/search.png'
import hearticon from '../../public/assets/heart.png'
import cart from '../../public/assets/cart.png'
import Cart from './cart';
import React, { useState } from 'react'
import Image from 'next/image';



const NavIcons = () => {

  const [isProfileOpen, setProfileOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)
  const router = useRouter()
  // temporary
  const islogedin = true
  const handleProfile = () => {
    if (!islogedin) {
      router.push('/login');
    } else {
      setProfileOpen((prev) => !prev);
    }
  };



  return (
    <div className='flex  space-x-6 text-lg text-black'>

      <div className="flex items-center relative space-x-4 justify-between w-full sm:w-auto sm:justify-end">
        <div className="relative">
          <Image
            src={signin}
            alt="signin"
            width={30}
            height={30}
            onClick={handleProfile}
            className="cursor-pointer"
          />
          {islogedin && isProfileOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-md text-sm z-10">
              <Link href="/profile" className="block mb-2 hover:underline">
                Profile
              </Link>
              <span onClick={() => setProfileOpen(false)} className="cursor-pointer hover:underline">
                Logout
              </span>
            </div>
          )}
        </div>
        <Link href="/search">
          <Image src={search} alt="search" width={30} height={30} />
        </Link>
        <Link href="/wishlist">
          <Image src={hearticon} alt="wishlist" width={23.33} height={18.67} />
        </Link>
        <div className="relative">
  <Image
    src={cart}
    alt="cart"
    width={30}
    height={30}
    className="cursor-pointer"
    onClick={() => setCartOpen((prev) => !prev)} // Toggle the cart modal
  />
  <span className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
    2
  </span>
  {isCartOpen && (
    <div>
      <Cart />
    </div>
  )}
</div>

      </div>


    </div>
  )
}

export default NavIcons
