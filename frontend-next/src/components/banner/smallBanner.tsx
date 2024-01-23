import style from "./banner.module.scss";

interface Props {
  title: string;
  children?: React.ReactNode;
}

const SmallBanner = ({ title, children }: Props) => {
  return (
    <div className={style.smallBanner}>
      <h1 className={style.subtitle}>{title}</h1>
      {children}
    </div>
  );
};

export default SmallBanner;
