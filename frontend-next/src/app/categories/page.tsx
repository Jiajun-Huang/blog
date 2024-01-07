import { CategorityControllerApi } from "@/api/openapi";

const Page = async () => {
  const categorities = await getcategorities();
  return <div>{JSON.stringify(categorities)}</div>;
};

const getcategorities = async () => {
  const controller = new CategorityControllerApi();
  const res = await controller.list1();
  return res;
};

export default Page;
