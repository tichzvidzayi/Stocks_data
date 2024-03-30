import { useState, useEffect, useCallback } from "react";

type ApiResponse = {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": Date; //Date
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
  "Time Series (5min)": {
    [timestamp: string]: {
      "1. open": number;
      "2. high": number;
      "3. low": number;
      "4. close": number;
      "5. volume": number;
    };
  };
};

const useApiFetch = (
  apiKey: string | undefined,
  apiUrl: string | undefined
) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!apiKey || !apiUrl) {
        throw new Error("API_key Or API_URL is missing, please correct this");
      }

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError("Oops an error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useApiFetch;
