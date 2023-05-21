import Fetch from '@/lib/fetch';
import axios from 'axios';
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
  static async createJob(payload: any, token: string) {
    const formData: FormData = new FormData();
    Object.keys(payload).map((key) => {
      formData.append(key, payload[key]);
    });
    const res = await Fetch.post('Jobs/CreateJobByPublisher', formData, {
      Authorization: token,
    });
  }
  static async updateJob(id: number, payload: any, token: string):Promise<void> {
    const formData: FormData = new FormData();
    Object.keys(payload).map((key) => {
      formData.append(key, payload[key]);
    });
    const res = await Fetch.put(`Jobs/UpdateJobByPublisher/${id}`, formData, {
      Authorization: token,
    });
  }
  static async deleteJob(id: number, token: string) {
    const data = await Fetch.delete(`Jobs/DeleteJobByPublisher/${id}`, {
      Authorization: token,
    });
  }
}

export default Job;
