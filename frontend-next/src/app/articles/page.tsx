import { BlogControllerApi } from "@/api/openapi/apis/BlogControllerApi";
import { ArticleCardProps } from "@/components/card/articleCard/articleCard";
import { ArticleCardList } from "@/components/card/articleCard/articleCardList";

export default async function Page() {
  const articles = await getArticleList();
  return (
    <div>
      <ArticleCardList articles={articles} />
    </div>
  );
}

// get article list from backend
const getArticleList = async () => {
  const controller = new BlogControllerApi();
  const res = await controller.getAllBlog();
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
