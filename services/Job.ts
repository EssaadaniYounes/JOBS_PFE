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
}

export default Job;
