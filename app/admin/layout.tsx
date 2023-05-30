import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/dist/client/components/headers';
import Logout from '@/components/partials/logout';
import Cookie from 'services/Cookie';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-9 ">
      <div className="col-span-2 bg-gray-200 shadow-md">
      <div className="mx-4 w-16">
    <svg className="fill-cyan-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>account-multiple</title>
      <path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" />
    </svg>
  </div>
        <div className="mt-4 flex flex-col space-y-2">
          <Link
            href={'/admin/jobs'}
            className="bg-gray-300 py-2 pl-3 text-xl font-semibold duration-150 hover:bg-gray-400"
          >
            Jobs
          </Link>
          <Link
            href={'/admin/categories'}
            className="bg-gray-300 py-2 pl-3 text-xl font-semibold duration-150 hover:bg-gray-400"
          >
            Categories
          </Link>
          {new Cookie(cookies()).isExist("token") && (
            <div className="bg-gray-300 py-2 pl-3 text-xl font-semibold duration-150 hover:bg-gray-400">
              <Logout />
            </div>
              )}
          
        </div>
      </div>
      <div className="col-span-7 max-h-screen overflow-y-auto">{children}</div>
    </div>
  );
}

export default RootLayout;
