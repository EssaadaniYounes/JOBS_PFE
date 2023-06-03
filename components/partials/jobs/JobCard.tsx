import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function JobCard({ job }: { job: IJob }) {
  return (
    <div>
      <div className="card flex flex-col rounded-none pb-4 shadow-xl">
        <div
          className="h-64 w-full bg-cover"
          style={{ backgroundImage: `url(${job.jobImageURL})` }}
        >
          <div className="h-full bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div className="mb-2 px-4">
          <div className="mb-4 text-2xl font-bold text-slate-600 ">
            {job.jobTitle}
          </div>
          <div className="overflow-clip text-slate-500">
            {job.jobDescription.slice(0, 45)}...
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between px-4">
          <div className="text-xs uppercase text-slate-500">
            {job.categoryName}
          </div>
          <Link
            href={`/jobs/${job.jobId}`}
            className="bg-cyan-600 px-8 py-4 text-sm uppercase text-cyan-100 hover:bg-cyan-700 hover:text-cyan-50"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* <div className="overflow-hidden rounded-md bg-white shadow-sm ">
      <Image
        src={job.jobImageURL}
        className="max-h-[200px] object-cover"
        width={400}
        height={200}
        alt="Job thumb"
      />
      <div className="px-1">
        <h2 className="text-lg font-medium capitalize text-gray-600">
          {job.jobTitle.toLowerCase()}
        </h2>
        <p>
          Posted by :
          <span className="pl-1 font-medium capitalize">
            {job.publisherFirstName.concat(' ', job.publisherLastName)}
          </span>
        </p>
        <p className="capitalize">
          {job.jobDescription.slice(0, 30).toLowerCase()}...
        </p>
        <div className="my-2 space-x-2">
          <Link
            href={`/jobs/job-by-cat/${job.categoryId}`}
            className="rounded-md bg-green-400 px-2 py-1 text-sm font-medium capitalize text-white"
          >
            {job.categoryName}
          </Link>
          <Link
            href={`/jobs/${job.jobId}`}
            className="rounded-md bg-blue-400 px-2 py-1 text-sm font-medium capitalize text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default JobCard;
