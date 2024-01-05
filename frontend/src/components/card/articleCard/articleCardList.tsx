import React from "react";
import { ArticleCard, ArticleCardProps } from "./ArticleCard";
interface ArticleCardListProps {
  articles: ArticleCardProps[];
}

export const ArticleCardList: React.FC<ArticleCardListProps> = ({
  articles,
}) => {
  return (
    <div>
      {articles.map((article, i) => (
        <ArticleCard key={i} {...article} />
      ))}
    </div>
  );
};
