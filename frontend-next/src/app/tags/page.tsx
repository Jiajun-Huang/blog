// uncache

import { listTags } from "@/api/Request";

export const dynamic = "force-dynamic";

const Page = async () => {
  const tags = await getTags();
  return <div>{JSON.stringify(tags)}</div>;
};

const getTags = async () => {
  const tags = await listTags();
  return tags;
};

export default Page;
