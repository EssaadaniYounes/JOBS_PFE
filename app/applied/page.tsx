import AppliedList from '@/components/partials/applied-jobs/AppliedJobs';
import CurrentUserApplied from '@/components/partials/applied-jobs/CurrentUserApplied';
import MainNav from '@/components/ui/navigation/MainNav';
import { cookies } from 'next/dist/client/components/headers';
import React from 'react';
import User from 'services/User';

async function page() {
  const data = await User.appliedJobs(cookies().get('token')?.value);
  return (
    <div className="h-screen">
      <MainNav cookie={cookies} />
      <h2 className="py-4 pl-3 text-3xl font-semibold capitalize">
        The jobs you applied To:
      </h2>
      <CurrentUserApplied data={data} />
    </div>
  );
}

export default page;
