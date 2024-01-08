import { TagControllerApi } from "@/api/openapi";

// uncache 

export const dynamic = "force-dynamic";

const Page = async () => {
  const tags = await getTags();
  return <div>{JSON.stringify(tags)}</div>;
};

const getTags = async () => {
  const controller = new TagControllerApi();
  const res = await controller.list();
  return res;
};

export default Page;
