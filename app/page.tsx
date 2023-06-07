import { JobCard } from '@/components/partials';
import JobCards from '@/components/partials/jobs/JobCards';
import MainNav from 'components/ui/navigation/MainNav';
import Category from 'services/Category';
import Job from 'services/Job';

export default async function Page() {
  const [jobs, categories] = await Promise.all([
    Job.getJobs(),
    Category.getAll(),
  ]);

  return (
    <div>
      <JobCards jobs={jobs} categories={categories} />
    </div>
  );
}
