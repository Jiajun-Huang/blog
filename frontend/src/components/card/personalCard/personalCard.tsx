import style from "./personalCard.module.scss";

export const PersonalCard = () => {
  return (
    <div className={style.personalCard}>
      <img alt="Jiajun Huang" src="../../../assets/react.svg" />
      <div className={style.name}>Jiajun Huang</div>
      <div className={style.links}>
        <div>Github</div>
        <div>Linkedin</div>
      </div>
    </div>
  );
};
