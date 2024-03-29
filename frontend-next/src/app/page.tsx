import { listBlogs } from "@/api/Request";
import { Banner } from "@/components/banner/banner";
import { ArticleCardProps } from "@/components/card/articleCard/articleCard";
import { ArticleCardList } from "@/components/card/articleCard/articleCardList";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ContentAndSidebar } from "@/layout/contentAndSidebar";
import styles from "./page.module.scss";

export const dynamic = "auto",
  revalidate = 60 * 60 * 24;
  

export default async function Home() {
  let articles: ArticleCardProps[] = [];
  try {
    articles = await getArticleList();
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Banner />
      <ContentAndSidebar>
        <div className={styles.mainContent}>
          <ArticleCardList articles={articles} />
        </div>
        <div className={styles.sideBar}>
          <Sidebar />
        </div>
      </ContentAndSidebar>
    </>
  );
}

const getArticleList = async () => {
  const res = await listBlogs();
  const articles: ArticleCardProps[] = res.map((item) => {
    const article: ArticleCardProps = {
      title: item.title ? item.title : "",
      createDate: item.createTime ? new Date(item.createTime) : new Date(),
      updateDate: item.updateTime ? new Date(item.updateTime) : new Date(),
      category: item.categorie
        ? item.categorie.name
          ? item.categorie.name
          : " "
        : " ",
      tags: [" "],
      desc: " ",
      uri: item.uri ? item.uri : "",
    };
    return article;
  });
  return articles;
};
