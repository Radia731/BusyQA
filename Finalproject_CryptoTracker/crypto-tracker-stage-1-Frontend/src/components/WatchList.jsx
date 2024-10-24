import CryptoCard from './CryptoCard';
import { useState, useEffect } from 'react';

const WatchList = () => {
  const [watchItems, setWatchItems] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWatchList = async () => {
      console.log(`Fetching watchItems...`);
      try {
        const response = await fetch(`http://localhost:3000/watchlist`);
        if (!response.ok) {
          throw new Error('There was an error fetching the watchlist');
        }

        const rawData = await response.json();

        console.log(`Watchlist data: ${JSON.stringify(rawData)}`);

        setWatchItems(rawData);

        setIsLoading(false);

      } catch (error) {
        console.log('Fetch error:', error);
        setError(error.message); // Capture any errors
      }
    };
    fetchWatchList();
  }, []);


  if (error) {
    return <div>Error: {error}</div>; // Display error message if any
  }

  if (isLoading) {
    return <div>Loading...</div>; // Display loading message
  }

  return (
    <div className="app">
      <h1>WatchList</h1>
      <div className="crypto-container">
        {watchItems?.map((currentCoin) => (
          <CryptoCard key={currentCoin.id} {...currentCoin} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;

