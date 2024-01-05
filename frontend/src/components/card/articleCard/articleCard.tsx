import { ArticleMeta } from "../../articleMeta/articleMeta";
import { BaseCard } from "../baseCard";
import style from "./articleCard.module.scss";

export interface ArticleCardProps {
  title: string;
  createDate: Date;
  updateDate: Date;
  categoriy: string;
  tags: string[];
  desc: string;
}



export const ArticleCard = ({
  title,
  createDate,
  updateDate,
  categoriy,
  tags,
  desc,
}: ArticleCardProps) => {
  return (
    <BaseCard className={style.articleCard}>
      <div className={style.articleCardContainer}>
        <div className={style.title}> {title}</div>
        <div className={style.meta}>
          <ArticleMeta
            createDate={createDate}
            updateDate={updateDate}
            categoriy={categoriy}
            tags={tags}
          />
        </div>
        <div className={style.desc}>{desc}</div>
      </div>
    </BaseCard>
  );
};
