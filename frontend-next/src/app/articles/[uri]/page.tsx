import { BlogControllerApi, FileControllerApi } from "@/api/openapi";
import Markdown from "@/components/Markdown/Markdown";
import ImageUrl from "@/util/imageurl";

export const revalidate = 0;

async function Page({ params }) {
  const article = await getArticleData(params.uri);
  const path = article.contentPath;
  const urlTransform = ImageUrl.bind(null, params.uri);

  console.log(urlTransform("test"));

  return (
    <div>
      <Markdown urlTransform={urlTransform}>
        {await getArticleContent(path)}
      </Markdown>
    </div>
  );
}

async function getArticleData(uri) {
  const controller = new BlogControllerApi();
  const res = await controller.getBlog({ uri: uri });
  return res;
}

async function getArticleContent(path) {
  const controller = new FileControllerApi();
  const res = await controller.downloadFile({ path: path });

  return res.text();
}

export default Page;
