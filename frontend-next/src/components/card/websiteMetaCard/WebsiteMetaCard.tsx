import { BaseCard } from "../baseCard";
import style from "./WebsiteMetaCard.module.scss";

const WebsiteMetaCard = () => {
  return (
    <BaseCard className={style.WebsiteMetaCard}>
      <div>
        <div className={style.itemHeadline}>Web info</div>
        <div className={style.webinfoItem}>
          <div className={style.itemName}>Blog Count:</div>
          <div className={style.itemValue}>0</div>
        </div>
        <div className={style.webinfoItem}>
          <div className={style.itemName}>Up Time:</div>
          <div className={style.itemValue}>0</div>
        </div>
        <div className={style.webinfoItem}>
          <div className={style.itemName}>Total Visit Count:</div>
          <div className={style.itemValue}>0</div>
        </div>
        <div className={style.webinfoItem}>
          <div className={style.itemName}>Last Update:</div>
          <div className={style.itemValue}>0</div>
        </div>
      </div>
    </BaseCard>
  );
};

export default WebsiteMetaCard;
