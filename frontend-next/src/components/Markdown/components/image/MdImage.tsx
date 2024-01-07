import style from "./mdImage.module.scss";

const MdmImage = (props: any) => {
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
