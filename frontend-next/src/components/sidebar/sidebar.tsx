import style from "@/components/sidebar/sidebar.module.scss";
import { PersonalCard } from "../card/personalCard/personalCard";

export const Sidebar = () => {
  return (
    <aside className={style.sideBar}>
      <PersonalCard />
    </aside>
  );
};
