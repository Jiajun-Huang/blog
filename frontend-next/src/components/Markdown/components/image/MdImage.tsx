"use client";
import Image from "next/image";
import { Image as A} from "antd";
interface Props {
  src: string;
  alt: string;
}

const MdmImage = ({ src, alt }: Props) => {
  // console.log(props, "props");
  return <Image fill src={src} alt={alt} />;
};

export default MdmImage;
