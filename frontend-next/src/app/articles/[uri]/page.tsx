import { BlogControllerApi, FileControllerApi } from "@/api/openapi";
import Markdown from "@/components/Markdown/Markdown";
import { BaseCard } from "@/components/card/baseCard";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ContentAndSidebar } from "@/layout/contentAndSidebar";
import ImageUrl from "@/util/imageurl";
import style from "./page.module.scss";

export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    uri: string;
  };
}

async function Page({ params }: PageProps) {
  const article = await getArticleData(params.uri);
  const path = article.contentPath;
  const urlTransform = ImageUrl.bind(null, params.uri);

  return (
    <ContentAndSidebar>
      <BaseCard hover={false}>
        <h1 className={style.title}>{article.title}</h1>
        <Markdown urlTransform={urlTransform}>
          {await getArticleContent(path)}
        </Markdown>
      </BaseCard>
      <Sidebar />
    </ContentAndSidebar>
  );
}

async function getArticleData(uri: string | undefined) {
  const controller = new BlogControllerApi();
  try {
    const res = await controller.getBlog({ uri: uri });
    return res;
  } catch (e) {
    console.log(e);
    return {
      title: "",
      contentPath: "",
    };
  }
}

async function getArticleContent(path: string | undefined) {
  if (path === undefined) {
    return "";
  }
  try {
    const controller = new FileControllerApi();
    const res = await controller.downloadFile({ path: path });
    return res.text();
  } catch (e) {
    console.log(e);
    return "";
  }
}

export default Page;
