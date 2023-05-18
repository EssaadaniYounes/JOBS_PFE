import { JobDetails } from '@/components/partials';
import React from 'react';
import Job from 'services/Job';

async function page({ params }: { params: { jobId: string } }) {
  const job = await Job.getJobById(params.jobId);

  return <JobDetails job={job} />;
}

export default page;
