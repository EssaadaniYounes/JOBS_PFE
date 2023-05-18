import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-9 ">
      <div className="col-span-2 bg-gray-200 shadow-md">
        <div>
          <Image
            src={'/logo.svg'}
            width={140}
            height={140}
            alt="logo"
            className="mx-auto"
          />
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
        </div>
      </div>
      <div className="col-span-7 max-h-screen overflow-y-auto">{children}</div>
    </div>
  );
}

export default RootLayout;
