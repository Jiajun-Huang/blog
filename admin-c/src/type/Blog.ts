import { User } from "./User";

export type Blog = {
  id: number;
  title: string;
  uri: string;
  coverPath: string;
  contentPath: string;
  flag: string;
  views: number;
  likes: number;
  commentable: boolean;
  published: boolean;
  deleted: boolean;
  createTime: Date;
  updatedTime: Date;
  user: User;
  tags: string[];
  categories: string[];
  images: string[];
  comments: Comment[];
};
