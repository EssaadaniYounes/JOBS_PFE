'use client';
import { useRouter } from 'next/navigation';
import React, { InputHTMLAttributes, useState } from 'react';
import User from 'services/User';
import Link from 'next/link';

function page() {
  const [payload, setPayload] = useState<LoginPayload>({
    email: '',
    password: '',
  });
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setPayload({ ...payload, [name]: value });
  };
  const submit = async () => {
    setLoading(true);
    const data = await User.Login(payload);
    if (data.isAuthenticated) {
      data.role == 'JobSeeker' ? router.push('/') : router.push('/admin/jobs');
    }
    setLoading(false);
  };
  return (
    
  <div  className="h-screen flex ">
    <div
       className="hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-[url('https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
    >
      <div  className="flex h-full flex-col justify-center bg-gradient-to-b from-transparent to-white backdrop-blur-md"></div>
      <div  className="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1  className="text-white font-bold text-4xl font-sans">Job Board</h1>
        <p  className="text-cyan-100 mt-1">To choose the right job!</p>
      </div>
    </div>
    <div
       className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8"
    >
      <div  className="w-full px-8 md:px-32 lg:px-24">
        <div  className="bg-white rounded-md shadow-2xl p-5">
          <h1  className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p  className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
          <div  className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
                    onChange={handleChange}
                    value={payload.email}
                    type="text"
                    name="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
          </div>
          <div  className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
                    onChange={handleChange}
                    value={payload.password}
                    type="password"
                    name="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
          </div>
          <button
            onClick={submit}
            className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            {!loading ? 'Login' : 'Login...'}
          </button>
          <div
             className="flex  items-center justify-center place-items-center"
          >
            <Link
            href={`/register`}
            className="text-sm mt-4 md:mt-0 md:ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
          >
            Don't have an account yet?
          </Link>
          </div>
            </div>
      </div>
    </div>
  </div>

      



    // <div className=" h-screen flex flex-col justify-center bg-gray-100 sm:py-6">
    //   <div className="relative py-3 sm:mx-auto sm:min-w-[30rem] sm:max-w-2xl">
    //     {/* <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div> */}
    //     <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
    //       <div className="mx-auto ">
    //         <div>
    //           <h1 className="text-center text-2xl font-semibold">Login</h1>
    //         </div>
    //         <div className="divide-y divide-gray-200">
    //           <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Email
    //               </label>
    //               <input
    //                 onChange={handleChange}
    //                 value={payload.email}
    //                 type="text"
    //                 name="email"
    //                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    //                 placeholder="John"
    //                 required
    //               />
    //             </div>

    //             <div>
    //               <label
    //                 htmlFor="password"
    //                 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 onChange={handleChange}
    //                 value={payload.password}
    //                 type="password"
    //                 name="password"
    //                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    //                 placeholder="John"
    //                 required
    //               />
    //             </div>
    //             <div className="relative mx-auto w-fit " onClick={submit}>
    //               <button className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white">
    //                 {!loading ? 'Login' : 'Login...'}
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> 


    
  );
}

export default page;
