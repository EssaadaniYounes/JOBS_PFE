import Image from 'next/image';
import React from 'react';
import demos from '@/constants/demos';
import Link from 'next/link';
function MainNav() {
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <Image src={'/logo.svg'} width={80} height={80} alt="Logo" />
      </div>
      <div className="navbar-center hidden md:flex">
        {demos.MainNavDemos.map((demo) => (
          <Link
            key={demo.sigment}
            href={demo.sigment}
            className="font-medium text-gray-600 duration-150 hover:text-gray-800"
          >
            {demo.title}
          </Link>
        ))}
      </div>
      <div className="navbar-end space-x-2">
        <Link
          href={'/login'}
          className="rounded-md bg-blue-400 px-4 py-1.5 font-medium text-white duration-150 hover:bg-blue-600"
        >
          Login
        </Link>
        <span>|</span>
        <Link
          href={'/register'}
          className="rounded-md bg-gray-200 px-4 py-1.5 font-medium duration-150 hover:bg-gray-400 "
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default MainNav;
