import { devApiUrl, devKey } from "./function-generals";

export const queryData = (endpoint, method = "get", fd = {}) => {
  let url = (devApiUrl = endpoint);
  let username = devKey;
  let password = "";
  let auth = btoa(`${username}:${password}`);
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic" + auth);
  myHeaders.append("Content-type", "application/json");

  let option = { method, headers: myHeaders };

  if (method !== "get") {
    options = {
      ...options,
      body: JSON.stringify(fd),
    };
  }
  const data = fetch(url, option).then((res) => res.json());

  return data;
};
