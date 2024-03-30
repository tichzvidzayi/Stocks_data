import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

type ApiResponse = {
  // Define the structure of your API response here
};

const useFetchAPI = (apiKey: string, apiUrl: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiUrl, {
        params: {
          apikey: apiKey,
        },
      });
      setData(response.data);
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiKey, apiUrl]);

  const cachedData = useMemo(() => data, [data]);

  return { data: cachedData, isLoading, error };
};

export default useFetchAPI;
