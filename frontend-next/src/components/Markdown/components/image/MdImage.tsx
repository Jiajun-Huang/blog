import Image from "next/image";
import style from "./mdImage.module.scss";

const MdmImage = (props) => {
  // console.log(props, "props");
  return (
    <div className={style.mdImage}>
      <div className={style.imageContainer}>
        <img className={style.image} fill {...props} />
      </div>
    </div>
  );
};

export default MdmImage;
