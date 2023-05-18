import { JobCard } from '@/components/partials';
import React from 'react';
import Job from 'services/Job';
async function page({ params }: { params: { catId: string } }) {
  const jobs = await Job.getJobByCategory(params.catId);
  return (
    <>
      <h2 className="mx-auto my-3 w-fit border-b-2 border-dashed border-gray-400 pb-1  text-2xl font-medium capitalize">
        {jobs[0].categoryName}
      </h2>
      <div className="grid grid-cols-1 gap-3 px-3 pb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <JobCard job={job} key={job.jobId} />
        ))}
      </div>
    </>
  );
}

export default page;
