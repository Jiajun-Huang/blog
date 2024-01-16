import { listCategories } from "@/api/Request";

export const dynamic = "force-dynamic";

const Page = async () => {
  const categorities = await getcategorities();
  return <div>{JSON.stringify(categorities)}</div>;
};

const getcategorities = async () => {
  return await listCategories();
};

export default Page;
