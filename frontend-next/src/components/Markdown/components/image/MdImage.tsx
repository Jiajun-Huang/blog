

import ImageUrl from "@/util/imageurl";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";
import style from "./mdImage.module.scss";

interface MdmImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  uri: string;
}

const MdmImage: React.FC<MdmImageProps> = (props) => {
  const alt = props.alt || "image";
  const uri = ImageUrl(props.uri, props.src);
  console.log(uri);

  // Render your image component here using the alt and uri
  return (
    <div className={style.mdImage}>
      <div className={style.imageContainer}>
        <Image className={style.image} fill alt={alt} src={uri} />
      </div>
    </div>
  );
};

interface MyMDXRemoteProps {
  children: string;
  uri: string;
}

const createImageComponent =
  (uri: string) => (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <MdmImage {...props} uri={uri} />;
  };

export default createImageComponent;

// interface MdmImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

// const createImageComponent: React.FC<MdmImageProps> = (props) => {

//   // Render your image component here using the alt and uri
//   return (
//     <div style={{ width: "100%", height: "auto" }}>
//       <Image fill alt={props.alt} src={props.src} />
//     </div>
//   );
// };

// export default createImageComponent;
