import { Banner } from "../../components/banner/banner";
import { ArticleCardList } from "../../components/card/articleCard/articleCardList";
import { ContentAndSidebar } from "../../layout/contentAndSideBar";

import fakedata from "../../static/fakedata.json";

const articles = JSON.parse(JSON.stringify(fakedata), (key, value) => {
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

export const Home = () => {
  return (
    <>
      <Banner />
      <ContentAndSidebar>
        <div>
          <ArticleCardList articles={articles} />
        </div>
        <div>sidebar</div>
      </ContentAndSidebar>
    </>
  );
};
