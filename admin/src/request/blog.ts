import { Blog } from "@/type/Blog";

export const uploadBlogRequest = async (
  images: File[],
  markdown: File,
  cover: File,
  uri: String,
  title: String,
  tags: any,
  createdTime: Date,
  categories: any,
  published: Boolean,
  commentable: Boolean
) => {
  const formData = new FormData();
  formData.append("markdown", markdown);
  formData.append("cover", cover);
  formData.append("title", title);
  formData.append("tags", JSON.stringify(tags));
  formData.append("categories", JSON.stringify(categories));
  formData.append("createdTime", createdTime.toString());
  formData.append("published", published.toString());
  formData.append("commentable", commentable.toString());
  formData.append("uri", uri);
  images.forEach((image) => {
    formData.append("images", image);
  });

  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/blog/upload`;
  const request = {
    method: "POST",
    body: formData,
    credentials: "include",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const listAllBlogsRequest = async () => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/blog/list`;
  const request = {
    method: "GET",
    credentials: "include",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const getBlogByUriRequest = async (uri: string) => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/blog/get?uri=${uri}`;
  const request = {
    method: "GET",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const getBlogByIdRequest = async (id: number) => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/blog/get?id=${id}`;
  const request = {
    method: "GET",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const getBlogContentRequest = async (blog: Blog) => {
  const url = `${process.env.BACKEND_URL}:${
    process.env.BACKEND_PORT
  }/file/download?path=${encodeURIComponent(blog.contentPath)}`;
  const request = {
    method: "GET",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.text(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const getBlogContentDownloadLink = (blog: Blog) => {
  const url = `${process.env.BACKEND_URL}:${
    process.env.BACKEND_PORT
  }/file/download?path=${encodeURIComponent(blog.contentPath)}`;
  return url;
};

export const getBlogCoverDownloadLink = (blog: Blog) => {
  const url = `${process.env.BACKEND_URL}:${
    process.env.BACKEND_PORT
  }/file/download?path=${encodeURIComponent(blog.coverPath)}`;
  return url;
};
