import style from "./onlyContent.module.scss";

interface Props {
  children: React.ReactNode;
}

const OnlyContent = ({ children }: Props) => {
  return <div className={style.onlyContent}>{children}</div>;
};

export default OnlyContent;
