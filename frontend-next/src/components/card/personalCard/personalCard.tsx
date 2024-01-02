import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Image from "next/image";
import { BaseCard } from "../baseCard";
import style from "./personalCard.module.scss";
export const PersonalCard = () => {
  return (
    <BaseCard className={style.personalCard}>
      <Image
        alt="Jiajun Huang"
        src="https://raw.githubusercontent.com/yayitazale/unraid-templates/main/frigate.png"
        width={120}
        height={120}
        className={style.avatar}
      />
      <div className={style.name}>Jiajun Huang</div>
      <div className={style.links}>
        <a
          className={style.link}
          href="https://github.com/Jiajun-Huang?tab=repositories"
        >
          <GithubFilled />
        </a>
        <a
          className={style.link}
          href="https://www.linkedin.com/in/jiajun-huang-6b3c/"
        >
          <LinkedinFilled />
        </a>
      </div>
    </BaseCard>
  );
};
