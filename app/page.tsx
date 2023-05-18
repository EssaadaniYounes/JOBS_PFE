import { JobCard } from '@/components/partials';
import MainNav from 'components/ui/navigation/MainNav';
import Job from 'services/Job';

export default async function Page() {
  const jobs = await Job.getJobs();
  return (
    <div className="space-y-6">
      <MainNav />

      <div className="grid grid-cols-1 gap-3 px-3 pb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <JobCard job={job} key={job.jobId} />
        ))}
      </div>
    </div>
  );
}
