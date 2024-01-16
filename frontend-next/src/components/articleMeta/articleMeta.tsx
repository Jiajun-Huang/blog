import {
  CalendarFilled,
  ClockCircleFilled,
  FolderOpenFilled,
  TagFilled,
} from "@ant-design/icons";
import Link from "next/link";
import style from "./articleMeta.module.scss";

interface ArticleMetaProps {
  createDate: Date;
  updateDate: Date;
  category: string;
  tags: string[];
}

const tagRoute = "/tag/";
const categoryRoute = "/category/";

export const ArticleMeta = ({
  createDate,
  updateDate,
  category,
  tags,
}: ArticleMetaProps) => {
  return (
    <div className={style.articleMata}>
      <span className={style.articleMataItem}>
        <span className={style.articleIcon}>
          <CalendarFilled />
        </span>
        <span className={style.articleLabel}>created</span>
        <time>{createDate.toLocaleDateString()} </time>
      </span>
      <span className={style.articleMataItem}>
        <span className={style.articleIcon}>
          <ClockCircleFilled />
        </span>
        <span className={style.articleLabel}>upated</span>
        <time>{updateDate.toLocaleDateString()}</time>
      </span>
      <span className={style.articleMataItem}>
        <span className={style.articleIcon}>
          <FolderOpenFilled />
        </span>

        <Link href={categoryRoute + category}>{category}</Link>
      </span>
      <span className={style.articleMataItem}>
        <span className={style.articleIcon}>
          <TagFilled />
        </span>
        {tags.map((tag, i) => (
          <span key={i} className={style.tags}>
            <Link href={tagRoute + tag}>{tag}</Link>
          </span>
        ))}
      </span>
    </div>
  );
};
