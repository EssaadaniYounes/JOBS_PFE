'use client';
import React from 'react';
import demos from '@/constants/demos';
import Link from 'next/link';
import Cookie from 'services/Cookie';
import Logout from '@/components/partials/logout';
function MainNav({ children }: { children?: any }) {
  return (
    <div className="fixed z-[999] mt-0 flex h-20 w-full items-center justify-between bg-white shadow-lg">
      <div className="flex items-center">
        <div className="mx-4 w-16">
          <svg
            className="fill-cyan-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>account-multiple</title>
            <path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" />
          </svg>
        </div>
        <div className="flex h-full items-center font-semibold uppercase text-slate-500">
          {demos.MainNavDemos.map((demo) => (
            <Link
              key={demo.sigment}
              href={demo.sigment}
              className="w-[64px] hover:text-cyan-700"
            >
              {demo.title}
            </Link>
          ))}
          {Cookie.getClientCookie('role') == 'JobSeeker' && (
            <Link href={`/applied`} className="w-[150px] hover:text-cyan-700">
              Applied Jobs
            </Link>
          )}
          {children}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {!Cookie.getClientCookie('token') && (
          <div className="navbar-end space-x-2">
            <Link
              href={'/login'}
              className="rounded-3xl bg-cyan-600 px-7 py-3 text-sm text-white hover:bg-cyan-700 hover:text-cyan-50"
            >
              Login
            </Link>
            <Link
              href={'/register'}
              className="rounded-3xl bg-cyan-600 px-7 py-3 text-sm text-white hover:bg-cyan-700 hover:text-cyan-50"
            >
              Register
            </Link>
          </div>
        )}
        {Cookie.getClientCookie('token') && (
          <div className="navbar-end mr-2 space-x-2 text-black">
            <div>
              <Logout />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainNav;
