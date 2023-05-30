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
  async function back(){
    router.push('/');
  }
  return (



<div  className="relative flex h-screen items-center  overflow-hidden p-5 lg:mx-40">
  <div  className="card min-w-screen  lg:mt-20 flex-col pb-4 shadow-xl rounded-none">
    <div  className="h-64 w-full bg-cover"  style={{ backgroundImage: `url(${job.jobImageURL})` }}>
      <div  className="h-full bg-gradient-to-b from-transparent to-white"></div>
    </div>
    <div  className="mb-2 px-4">
      <div  className="mb-4 text-2xl font-bold text-slate-600">{job.jobTitle}</div>
      <div  className="text-slate-500">{job.jobDescription}, Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius ea omnis soluta voluptate minus nulla id repellendus repudiandae illum. Voluptatibus ratione nisi, qui consectetur pariatur perferendis mollitia eius maiores! orem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius ea omnis soluta voluptate minus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
    </div>
    <div  className="mt-auto flex items-center justify-between px-4">
      <div  className="mt-auto px-4">
        <div className="text-xs text-slate-500">#category :<span   className="text-xs uppercase text-slate-800">{job.categoryName}</span> </div>
        <div  className="text-xs uppercase text-slate-700">
          <div  className="flex items-center">
            by {job.publisherFirstName.concat(' ', job.publisherLastName)}
            <a href={`mailto:${job.publisherEmail}`}>
              <svg  className="mx-5 h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-5 7 5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div>
        <button   className=" px-8 py-4 text-sm  text-cyan-950 hover:underline" onClick={back} >back to list</button>
      
      {Cookie.getClientCookie('role') == 'JobSeeker' && (
              <button
                onClick={submit}
                type="submit"
                className="bg-cyan-600 px-8 py-4 text-sm uppercase text-cyan-100 hover:bg-cyan-700 hover:text-cyan-50"
              >
                Apply now
              </button>
            )}
      </div>
      
    </div>
  </div>
</div>

/* 
    <div className=" dark:bg-gray-800 dark:text-gray-50">
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
    </div> */


  );
}

export default JobDetails;
