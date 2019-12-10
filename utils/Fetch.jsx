import { useEffect, useState } from 'react';

const hostname = 'https://daresay-dev.eu-gb.cf.appdomain.cloud';
const defaultURL = `${hostname}/innovativa`;
export const useFetchJSON = (url, op, refetch) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  let options = op;
  if (!options) {
    options = {};
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      setData(null);

      options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options.headers
      };

      const resp = await fetch(defaultURL + url, options);
      console.log(defaultURL + url)
      if (resp.status >= 400) {
        if (resp.status === 401) {
          console.log("Bad Response");
        }
        setError(resp.status);
        setLoading(false);
        return;
      }

      if (resp.status !== 204) {
        const jsonBody = await resp.json();
        setData(jsonBody);
      }

      setLoading(false);
    })();
  }, [url, refetch]);
  return { loading, error, data };
};
