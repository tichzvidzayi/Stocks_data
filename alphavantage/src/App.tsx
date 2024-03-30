import useApiFetch from "./customhooks/useFetchAPI";
import "./index.css";

function App() {
  const apiKey = "RIBXT3XYLI69PC0Q";
  const apiUrl =
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`;

  const { data, isLoading, error } = useApiFetch(apiKey, apiUrl);

  if (isLoading) {
    return <div> Loading content...</div>;
  }

  if (error) {
    return <div> Ooops an error occurred. : {error}</div>;
  }

  const metaData = data?.["Meta Data"];
  const timeSeries = data?.["Time Series (5min)"];

  return (
    <>
      <h1 className=" text-center text-5xl m-9"> Alpha Vantage : IBM</h1>

      <div className="grid grid-cols-4 gap-4 bg-purple-300 font-sans text-pretty ">
        <div className="bg-[url('./assets/stocks.png')]"></div>
        {metaData && (
          <div className="bg-gray-900 text-slate-100 text-wrap text-center ">
            <h2 className="text-lg font-bold mb-2">{metaData["2. Symbol"]}</h2>
            <p>{metaData["1. Information"]}</p>
            <p>Last Refreshed: {metaData["3. Last Refreshed"]}</p>
            <p>Interval: {metaData["4. Interval"]}</p>
            <p>Time Zone: {metaData["6. Time Zone"]}</p>
          </div>
        )}

        {timeSeries && (
          <div className="col-span-2">
            <h3 className="text-md font-bold mb-2">Time Series (5min)</h3>
            <ul>
              {Object.entries(timeSeries).map(([timestamp, values]) => (
                <li key={timestamp} className="grid grid-cols-2 gap-2">
                  <strong>{timestamp}</strong>
                  <div>
                    <p>Open: {values["1. open"]}</p>
                    <p>High: {values["2. high"]}</p>
                    <p>Low: {values["3. low"]}</p>
                    <p>Close: {values["4. close"]}</p>
                    <p>Volume: {values["5. volume"]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
