const backendBaseUrl = "http://localhost:8080/file/download?path=";

export default function ImageUrl(uri, src: string | undefined) {
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
