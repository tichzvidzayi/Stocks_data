# alpha_vantage
A React, TypeScript and TailwindCSS Web application to display AlphaVantage API's data

The Web app uses a customhook (useAPIFetch) that includes a useState, useCallBack and useEffect hooks
   - useState- manages states
   - useCallback - avoid unneccessary re-rendering of the component when data has not changed (memoization) 
   - useEffect - runs when we first call our api and when data changes

.env file 
   - used to avoid uploading api-keys and other sensitive information to repos
   - maintain a single source of change especially if the application scales
   (process.env.REACT_APP_API_URL;)

Custom Hook (useAPIfetch)
   - Abstracts how we handle API and can be used to handle other APIs

TailwindCssis usd to make data more readable/user friendly


How to run the web app

1. Clone the repository
2. Navigate to alpha_vantage/alphavantage    folder
3. Run npm install   
   (*Node should be installed v18+)
4. RUn npx vite



