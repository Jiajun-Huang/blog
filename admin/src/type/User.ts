import { Blog } from "./Blog";

export type User = {
  id: number;
  username: string;
  nickname: string;
  avatar: string;
  email: string;
  role?: string;
  password?: string;
  createdTime: Date;
  updatedTime: Date;
  comments?: Comment[];
  blogs?: Blog[];
  admin?: boolean;
};
