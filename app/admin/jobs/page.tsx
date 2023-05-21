import CreateJob from '@/components/partials/jobs/CreateJob';
import JobsList from '@/components/partials/jobs/JobsList';
import { cookies } from 'next/dist/client/components/headers';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Cookie from 'services/Cookie';
import Job from 'services/Job';

async function pages() {
  const data = await Job.getPublisherJobs(cookies().get('token')?.value);

  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h2 className="py-4 pl-2 text-3xl font-medium">Jobs list</h2>
        <label htmlFor="my-modal-4" className="btn">
          Create new job <AiOutlinePlus size={25} />
        </label>
      </div>
      <CreateJob />
      <JobsList data={data} />
    </div>
  );
}

export default pages;
