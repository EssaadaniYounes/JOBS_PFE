import Fetch from '@/lib/fetch';
class Job {
  static async getJobs(): Promise<IJob[]> {
    const data = await Fetch.getAllAxios('visitor');
    return data;
  }

  static async getJobById(id: string): Promise<IJob> {
    const data = await Fetch.getAllAxios(`visitor/${id}`);
    return data;
  }

  static async getJobByCategory(id: string): Promise<IJob[]> {
    const data = await Fetch.getAllAxios(
      `visitor/GetByCategoryId?categoryId=${id}`,
    );
    return data;
  }

  static async getPublisherJobs(token: string): Promise<IJob[]> {
    const data = await Fetch.getAllAxios(`Jobs/JobsCreatedByPublisher`, {
      Authorization: token,
    });
    return data;
  }
  static async getAppliedJob(id: number, token: string): Promise<Apply[]> {
    const data = await Fetch.getAllAxios(
      `Jobs/GetAppliedUsersForJobCreatedByPublisher/job/${id}`,
      {
        Authorization: token,
      },
    );
    return data;
  }
}

export default Job;
