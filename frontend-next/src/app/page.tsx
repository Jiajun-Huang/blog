import fackdata from "@/assets/fakedata.json";
import { Banner } from "@/components/banner/banner";
import { ArticleCardList } from "@/components/card/articleCard/articleCardList";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ContentAndSidebar } from "@/layout/contentAndSidebar";
import styles from "./page.module.scss";

export default function Home() {
  const articless = getdata();

  return (
    <>
      <Banner />
      <ContentAndSidebar>
        <div className={styles.mainContent}>
          <ArticleCardList articles={articless} />
        </div>
        <div className={styles.sideBar}>
          <Sidebar />
        </div>
      </ContentAndSidebar>
    </>
  );
}

export const getdata = () => {
  const articles = JSON.parse(JSON.stringify(fackdata), (key, value) => {
    if (key.includes("Date")) {
      return new Date(value);
    }
    if (key === "tags") {
      return [value.slice(0, 10)];
    }

    if (key === "title") {
      return value.slice(0, 20);
    }

    if (key === "categoriy") {
      return value.slice(0, 10);
    }

    return value;
  });

  return articles;
};
