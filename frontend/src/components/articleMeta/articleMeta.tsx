import {
  CalendarFilled,
  ClockCircleFilled,
  FolderOpenFilled,
  TagFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import style from "./articleMeta.module.scss";

interface ArticleMetaProps {
  createDate: Date;
  updateDate: Date;
  categoriy: string;
  tags: string[];
}

export const ArticleMeta = ({
  createDate,
  updateDate,
  categoriy,
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
        <Link to={"/"}>{categoriy}</Link>
      </span>
      <span className={style.articleMataItem}>
        <span className={style.articleIcon}>
          <TagFilled />
        </span>
        {tags.map((tag, i) => (
          <span key={i} className={style.tags}>
            <Link to={"/"}>{tag}</Link>
          </span>
        ))}
      </span>
    </div>
  );
};
