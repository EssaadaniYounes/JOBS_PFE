'use client';
import { useRouter } from 'next/navigation';
import React, { InputHTMLAttributes, useState } from 'react';
import User from 'services/User';

function page() {
  const [payload, setPayload] = useState<RegisterPayload>({
    firstName: '',
    lastName: '',
    username: '',
    role: 'JobSeeker',
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
    const data = await User.Register(payload);
    if (data.isAuthenticated) {
      data.role == 'JobSeeker' ? router.push('/') : router.push('/admin');
    } else {
      alert('Invalid Credentials!');
    }
  };
  return (
    <div className=" flex flex-col justify-center bg-gray-100 sm:py-6">
      <div className="relative py-3 sm:mx-auto sm:min-w-[30rem] sm:max-w-2xl">
        {/* <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div> */}
        <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mx-auto ">
            <div>
              <h1 className="text-center text-2xl font-semibold">Register</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    onChange={handleChange}
                    value={payload.firstName}
                    type="text"
                    name="firstName"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={payload.lastName}
                    type="text"
                    name="lastName"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    onChange={handleChange}
                    value={payload.username}
                    type="text"
                    name="username"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Role"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>

                  <div className="flex items-center justify-between space-x-6">
                    <div>
                      <input
                        onChange={handleChange}
                        value="JobSeeker"
                        type="radio"
                        name="role"
                        className="mr-2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="John"
                        required
                      />
                      <label htmlFor="">Job Seeker</label>
                    </div>
                    <div>
                      <input
                        onChange={handleChange}
                        value="Publisher"
                        type="radio"
                        name="role"
                        className="mr-2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="John"
                        required
                      />
                      <label htmlFor="">Publisher</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
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

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
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
                <div className="relative mx-auto w-fit">
                  <button
                    onClick={submit}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                  >
                    {!loading ? 'Register' : 'Register...'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
