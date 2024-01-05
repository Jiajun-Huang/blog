export const loginRequestF = async (username: string, password: string) => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/user/login`;
  console.log(JSON.stringify({ username, password }));
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const logoutRequest = async () => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/user/logout`;
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cors: "no-cors",
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};

export const checkLoginRequest = async () => {
  const url = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/user/checkLogin`;
  const request = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // Include this line to send cookies
  };
  const res = await fetch(url, request);
  if (res.ok) {
    const data = await res.json(); // Attempt to parse JSON only if the response is OK
    return data;
  } else {
    console.error("Error:", res.status, res.statusText);
    return null; // Handle the error case appropriately
  }
};
