import style from "./baseCard.module.scss";

export const BaseCard = ({ children, className }) => {
  return (
    <div className={[style.baseCard, className].join(" ")}>{children}</div>
  );
};
