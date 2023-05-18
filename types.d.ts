interface IJob {
  jobId: number;
  jobTitle: string;
  jobDescription: string;
  jobImageURL: string;
  jobImagePublicId: string;
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
}
type Role = 'Publisher' | 'JobSeeker';
type LoginPayload = {
  email: string;
  password: string;
};
type RegisterPayload = LoginPayload & {
  firstName: string;
  lastName: string;
  username: string;
  role: Role;
};
type RegisterResponse = {
  firstName: string;
  lastName: string;
  username: string;
  role: string;
  email: string;
  password: string;
};

type Apply = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  applyDate: string;
};
