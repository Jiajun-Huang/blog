import { BASE_PATH } from "@/api/openapi";

const backendBaseUrl = BASE_PATH + "/file/download?path=";

export default function ImageUrl(uri: string, src: string | undefined) {
  // if it is from the web then return the src
  if (!src) return "";

  if (src.includes("http") || src.includes("https")) {
    return src;
  }

  // if it is from the need to fetch from the backend

  const encoded = encodeURIComponent(uri + "/" + src);
  const url = backendBaseUrl + encoded;
  return url;
}
