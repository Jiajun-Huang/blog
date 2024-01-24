import Link from "next/link";
import style from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.leftItems}>
        <Link href={"/"} className={style.navItem}>
          Jiajun Huang
        </Link>
      </div>

      <div className={style.rightItems}>
        <Link href={"/articles"} className={style.navItem}>
          Articles
        </Link>
        <Link href={"/categories"} className={style.navItem}>
          Categories
        </Link>
        <Link href={"/tags"} className={style.navItem}>
          Tags
        </Link>
        {/* <Link href={"about"} className={style.navItem}>
          About
        </Link> */}
      </div>
    </div>
  );
};
