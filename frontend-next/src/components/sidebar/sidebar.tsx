import { PersonalCard } from "../card/personalCard/personalCard";
import style from "./sideBar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={style.sideBar}>
      <PersonalCard />
    </aside>
  );
};
