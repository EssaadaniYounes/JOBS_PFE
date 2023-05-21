'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import Cookie from 'services/Cookie';
import User from 'services/User';

function JobDetails({ job }: { job: IJob }) {
  const router = useRouter();
  async function submit() {
    const data = await User.ApplyForJob(
      job.jobId,
      Cookie.getClientCookie('token')?.toString(),
    );
    alert(data);
    router.push('/');
  }
  return (
    <div className="h-full dark:bg-gray-800 dark:text-gray-50">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex flex-col justify-center bg-cover bg-no-repeat align-middle dark:bg-gray-700 lg:col-span-6 lg:h-auto">
          <Image
            src={job.jobImageURL}
            width={700}
            height={800}
            alt="Job cover"
          />
        </div>
        <div className="col-span-12 flex flex-col divide-y divide-gray-700 p-6 lg:col-span-6 lg:p-10">
          <div className="space-y-2 pb-4 pt-6">
            <h1 className="text-3xl font-bold">{job.jobTitle}</h1>
            <p className="break-all	">{job.jobDescription}</p>
            <Link
              rel="noopener noreferrer"
              href={`/jobs/job-by-cat/${job.categoryId}`}
              className="inline-flex items-center space-x-2 py-2 text-sm dark:text-violet-400"
            >
              <span>{job.categoryName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <br />
            {Cookie.getClientCookie('role') == 'JobSeeker' && (
              <button
                onClick={submit}
                type="submit"
                className="btn-primary btn-sm btn"
              >
                Apply for this job
              </button>
            )}
            <p>
              Contact link :{' '}
              <a
                href={`mailto:${job.publisherEmail}`}
                className="font-semibold"
              >
                {job.publisherEmail}
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
