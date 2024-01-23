import {
  BlogControllerApi,
  BlogDto,
  CategorityControllerApi,
  FileControllerApi,
  TagControllerApi,
} from "./openapi";

// list all categories
const categoryController = new CategorityControllerApi();
const blogController = new BlogControllerApi();
const tagController = new TagControllerApi();
const fileController = new FileControllerApi();

export const listCategories = async () => {
  const response = await categoryController.listCategory();
  return response;
};

// create category
export const createCategory = async (name: string) => {
  console.log(name);
  const response = await categoryController.createCategoryRaw({
    name,
  });
  return response;
};

// delete category
export const deleteCategory = async (name: string) => {
  const response = await categoryController.deleteCategoryByName({
    name,
  });
  return response;
};

// list all blogs
export const listBlogs = async () => {
  const response = await blogController.getAllBlog();
  return response;
};

export const getBlogById = async (id: number) => {
  const response = await blogController.getBlog({
    id,
  });
  return response;
};

export const getBlogByUri = async (uri: string) => {
  const response = await blogController.getBlog({
    uri,
  });
  return response;
};

// create blog
interface CreateBlogParams {
  blog: BlogDto;
  markdown: Blob;
  images?: Array<Blob>;
  cover?: Blob;
}
export const createBlog = async ({
  blog,
  markdown,
  images,
  cover,
}: CreateBlogParams) => {
  const response = await blogController.uploadBlogRaw({
    blogDto: blog,
    markdown,
    images,
    cover,
  });
  return response.raw.ok;
};

// delete blog
export const deleteBlog = async (id: number) => {
  const response = await blogController.deleteBlog({
    id,
  });
  return response;
};

// list all tags
export const listTags = async () => {
  const response = await tagController.listAllTags();
  return response;
};

// create tag
export const createTag = async (name: string) => {
  const response = await tagController.createTagRaw({
    name,
  });
  return response;
};

// delete tag
export const deleteTag = async (name: string) => {
  const response = await tagController.deleteTagByName({
    name,
  });
  return response;
};

// upload file
export const uploadFile = async (files: Blob[], path: string) => {
  const response = await fileController.uploadFile({
    files,
    path,
  });
  return response;
};
