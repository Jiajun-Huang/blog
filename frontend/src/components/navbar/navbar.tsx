import { MyLayout } from "../anti/Layout/MyLayout";
import style from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <MyLayout>
      <div className={style.navbar}>
        {/* Left item */}
        <div className={style.leftItems}>
          <div className={style.navItem}>Jiajun Huang</div>
        </div>
        {/* right item */}
        <div className={style.rightItems}>
          <div className={style.navItem}>Articles</div>
          <div className={style.navItem}>Categories</div>
          <div className={style.navItem}>Tags</div>
          <div className={style.navItem}>About</div>
        </div>
      </div>
    </MyLayout>
  );
};
