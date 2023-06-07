'use client';
import MainNav from '@/components/ui/navigation/MainNav';
import React, { useState } from 'react';
import JobCard from './JobCard';

function JobCards({
  jobs,
  categories,
}: {
  jobs: IJob[];
  categories: ICategory[];
}) {
  const [filtredJobs, setFiltredJobs] = useState<IJob[]>(jobs);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;
    const filtred = jobs.filter((j) => j.categoryName.includes(value));
    setFiltredJobs(filtred);
  };
  return (
    <>
      <MainNav />
      <select
        onChange={handleChange}
        name="category"
        className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      >
        <option value={''}>All</option>
        {categories.length > 0 &&
          categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
      </select>
      <div className="h-screen bg-[url('https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80')] bg-cover">
        <div className="flex h-full flex-col justify-center bg-gradient-to-b from-transparent to-white backdrop-blur-md">
          <div className="bg-gradient-to-r from-transparent via-black to-transparent py-4 text-center font-extrabold uppercase tracking-widest text-slate-100 sm:text-4xl md:text-6xl">
            To chose the <span className="text-cyan-400">right</span> job!
          </div>
        </div>
      </div>

      <div className="px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filtredJobs.map((job) => (
            <JobCard job={job} key={job.jobId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default JobCards;
