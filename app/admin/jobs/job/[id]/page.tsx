import AppliedList from '@/components/partials/applied-jobs/AppliedJobs';
import { cookies } from 'next/dist/client/components/headers';
import React from 'react';
import Job from 'services/Job';

async function page({ params: { id } }: { params: { id: number } }) {
  const data = await Job.getAppliedJob(id, cookies().get('token')?.value);
  return (
    <div>
      <h2 className="py-4 pl-2  text-3xl font-medium">
        Users applied for this job
      </h2>

      <AppliedList data={data} />
    </div>
  );
}

export default page;
