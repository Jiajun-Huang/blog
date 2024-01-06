import style from "./contentAndSideBar.module.scss";

type ContentAndSidebarProps = {
  children: React.ReactNode[];
};

export const ContentAndSidebar = ({ children }: ContentAndSidebarProps) => {
  return (
    <div className={style.contentAndSidebar}>
      <div className={style.content}>{children[0]}</div>
      <div className={style.sidebar}>{children[1]}</div>
    </div>
  );
};
