import style from "./banner.module.scss";

import { Type } from "@/components/typed/typed";

import { DownOutlined } from "@ant-design/icons";

const sentences = ["I am a full stack developer", "I am a Computer Engineer"];

export const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.title}>
        <h1>Jiajun's Website asdfas df</h1>
      </div>
      <div className={style.subtitle}>
        <Type sentences={sentences} />
      </div>
      <div className={style.pulldown_button}>
        <DownOutlined />
      </div>
    </div>
  );
};
