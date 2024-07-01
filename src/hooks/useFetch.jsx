import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await axios.get(url);
        setState(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [url]);

  return { state, loading, error };
}
