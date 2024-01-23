import style from "@/components/sidebar/sidebar.module.scss";
import { PersonalCard } from "../card/personalCard/personalCard";
import WebsiteMetaCard from "../card/websiteMetaCard/WebsiteMetaCard";

export const Sidebar = () => {
  return (
    <aside className={style.sideBar}>
      <div className={style.sideBarItem}>
        <PersonalCard />
      </div>
      <div className={style.sideBarItem}>
        <WebsiteMetaCard />
      </div>
    </aside>
  );
};
