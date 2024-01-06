import React from "react";
import { ArticleCard, ArticleCardProps } from "./ArticleCard";
import style from "./articleCard.module.scss";

interface ArticleCardListProps {
  articles: ArticleCardProps[];
}

export const ArticleCardList: React.FC<ArticleCardListProps> = ({
  articles,
}) => {
  if (articles === undefined || articles.map === undefined) {
    return <div>undefined</div>;
  }

  return (
    <div className={style.articleCardList}>
      {articles.map((article, i) => (
        <ArticleCard key={i} {...article} />
      ))}
    </div>
  );
};
