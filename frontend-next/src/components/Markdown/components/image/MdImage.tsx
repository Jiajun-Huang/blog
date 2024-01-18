import Image from "next/image";
import style from "./MdImage.module.scss";

const MdmImage = (props: any) => {
  // console.log(props, "props");
  return (
    <div className={style.mdImage}>
      <div className={style.imageContainer}>
        <Image className={style.image} fill {...props} />
      </div>
    </div>
  );
};

export default MdmImage;
