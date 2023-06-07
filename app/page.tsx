import JobCards from '@/components/partials/jobs/JobCards';
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
