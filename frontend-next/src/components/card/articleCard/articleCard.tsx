import Link from "next/link";
import { ArticleMeta } from "../../articleMeta/articleMeta";
import { BaseCard } from "../baseCard";
import style from "./articleCard.module.scss";

export interface ArticleCardProps {
  title: string;
  createDate: Date;
  updateDate: Date;
  category: string;
  tags: string[];
  desc: string;
  uri: string;
}

const articleRoute = "articles/";

export const ArticleCard = ({
  title,
  createDate,
  updateDate,
  category,
  tags,
  desc,
  uri,
}: ArticleCardProps) => {
  console.log(articleRoute + uri);
  return (
    <Link href={articleRoute + uri}>
      <BaseCard className={style.articleCard} hover>
        <div className={style.articleCardContainer}>
          <div className={style.title}> {title}</div>
          <div className={style.meta}>
            <ArticleMeta
              createDate={createDate}
              updateDate={updateDate}
              category={category}
              tags={tags}
            />
          </div>
          <div className={style.desc}>{desc}</div>
        </div>
      </BaseCard>
    </Link>
  );
};
