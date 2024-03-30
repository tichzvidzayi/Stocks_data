import { useState, useEffect } from 'react';

type ApiResponse = {
 // APi structure
};

const useApiFetch = (apiKey: string, apiUrl: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
         setError("505");// setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [apiKey, apiUrl]);

  return { data, isLoading, error };
};

export default useApiFetch;
