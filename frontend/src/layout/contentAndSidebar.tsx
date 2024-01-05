import style from "./contentAndSideBar.module.scss";

export const ContentAndSidebar = ({ children }) => {
  return (
    <div className={style.contentAndSidebar}>
      <div className={style.content}>{children[0]}</div>
      <div className={style.sidebar}>{children[1]}</div>
    </div>
  );
};
