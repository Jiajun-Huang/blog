export const uploadFileRequest = async (files: File[], path: string) => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/file/upload`;
  var myHeaders = new Headers();
  myHeaders.append("Connection", "keep-alive");

  var formdata = new FormData();

  for (var i = 0; i < files.length; i++) {
    formdata.append("files", files[i]);
  }
  formdata.append("path", path);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};
