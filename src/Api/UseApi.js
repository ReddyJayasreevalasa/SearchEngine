import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  return data;
};