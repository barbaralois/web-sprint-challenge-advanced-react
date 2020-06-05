import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, loading];
};

export default useAxios;
