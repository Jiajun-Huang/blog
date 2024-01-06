import style from "./baseCard.module.scss";

type BaseCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export const BaseCard = ({ children, className, hover=true }: BaseCardProps) => {
  const hoverStyle = hover ? style.hover : "";
  return (
    <div className={[style.baseCard, className, hoverStyle].join(" ")}>
      {children}
    </div>
  );
};
