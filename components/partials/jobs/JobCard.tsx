import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function JobCard({ job }: { job: IJob }) {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-sm ">
      <Image src={job.jobImageURL} width={400} height={200} alt="Job thumb" />
      <div className="px-1">
        <h2 className="text-lg font-medium capitalize text-gray-600">
          {job.jobTitle.toLowerCase()}
        </h2>
        <p>{job.jobDescription.slice(0, 30).toLowerCase()}...</p>
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
    </div>
  );
}

export default JobCard;
