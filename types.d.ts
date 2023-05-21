interface IJob {
  jobId: number;
  jobTitle: string;
  jobDescription: string;
  jobImageURL: string;
  jobImagePublicId: string;
  categoryId: number | string;
  categoryName: string;
  categoryDescription: string;
  publisherFirstName: string;
  publisherLastName: string;
  publisherEmail: string;
  publisherUserName: string;
}
interface JobPayload {
  jobImage: File | null;
  jobTitle: string | undefined;
  jobDescription: string | undefined;
  categoryId: null | string | undefined;
}
interface CategoryPayload {
  name: string | undefined;
  description: string | undefined;
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
interface ICategory {
  id: number;
  name: string;
  description: string;
}
