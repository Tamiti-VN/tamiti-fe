export type User = {
  _id: string;
  username: string;
  password: string;
  email?: string;
  roles?: string[];
  phone?: number;
  address?: string;
};