import { getBlogByUri } from "@/api/Request";
import { FileControllerApi } from "@/api/openapi";
import Markdown from "@/components/Markdown/Markdown";
import { ArticleMeta } from "@/components/articleMeta/articleMeta";
import SmallBanner from "@/components/banner/smallBanner";
import { BaseCard } from "@/components/card/baseCard";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ContentAndSidebar } from "@/layout/contentAndSidebar";
import ImageUrl from "@/util/imageurl";

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
    <>
      <SmallBanner title={article.title || ""}>
        <ArticleMeta
          createDate={article.createTime || new Date()}
          updateDate={article.updateTime || new Date()}
          category={article.categorie ? article.categorie || "" : ""}
          tags={article.tags || []}
        />
      </SmallBanner>
      <ContentAndSidebar>
        <BaseCard hover={false}>
          <Markdown urlTransform={urlTransform}>
            {await getArticleContent(path)}
          </Markdown>
        </BaseCard>
        <Sidebar />
      </ContentAndSidebar>
    </>
  );
}

async function getArticleData(uri: string | undefined) {
  if (uri === undefined) {
    return {};
  }

  const res = await getBlogByUri(uri);
  return {
    title: res.title,
    createTime: res.createTime,
    updateTime: res.updateTime,
    categorie: res.categorie?.name,
    tags: res.tags
      ?.filter((tag) => tag !== undefined && tag.name !== undefined)
      .map((tag) => tag.name) as string[],
    contentPath: res.contentPath,
  };
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
