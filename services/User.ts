import Fetch from '@/lib/fetch';
import Cookie from './Cookie';

class User {
  static async Login(payload: LoginPayload): Promise<{
    isAuthenticated: boolean;
    role: Role;
  }> {
    const data = (await Fetch.post('Auth/token', payload)) as LoginResponse;
    Cookie.setCookie('token', 'Bearer ' + data.token, 30);
    Cookie.setCookie('role', data.roles[0], 30);
    return {
      isAuthenticated: data.isAuthenticated,
      role: data.roles[0] as Role,
    };
  }
  static async Register(payload: RegisterPayload): Promise<{
    isAuthenticated: boolean;
    role: Role;
  }> {
    const data = (await Fetch.post(
      'Auth/register',
      payload,
    )) as RegisterResponse;
    if (data.isAuthenticated) {
      Cookie.setCookie('token', 'Bearer ' + data.token, 30);
      Cookie.setCookie('role', data.roles[0], 30);
    }
    return {
      isAuthenticated: data.isAuthenticated,
      role: data.roles[0] as Role,
    };
  }
  static async ApplyForJob(jobId: number, token: string) {
    const message = await Fetch.post(
      `ApplyForJobs/apply/${jobId}`,
      {},
      { Authorization: token },
    );
    return message;
  }
}

export default User;
