/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { axios } from "axios";

function useFetch(url) {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetching() {
      setLoading(true);
      try {
        let respose = await axios.get(url);
        if (!respose.ok) throw new Error("data fetching failed");

        setState(respose.data);
        setError(null);
      } catch (error) {
        if (error) setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [url]);
  return { state, loading, error };
}
