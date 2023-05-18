import JobsList from '@/components/partials/jobs/JobsList';
import { cookies } from 'next/dist/client/components/headers';
import React from 'react';
import Cookie from 'services/Cookie';
import Job from 'services/Job';

async function pages() {
  const data = await Job.getPublisherJobs(cookies().get('token')?.value);
  return (
    <div>
      <h2 className="py-4 pl-2  text-3xl font-medium">Jobs list</h2>

      <JobsList data={data} />
    </div>
  );
}

export default pages;
