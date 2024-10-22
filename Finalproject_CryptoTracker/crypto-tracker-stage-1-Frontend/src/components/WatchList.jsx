import { useState, useEffect } from 'react';

const WatchList = () => {
    const [watchItems, setWatchItems] = useState([]);
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        fetchData(); //initializing the fetched data
    }, []);

    const fetchData = async () => { 
        console.log(`Fetching watchItems...`);
        try {
            const response = await fetch(`http://localhost:3000/watchlist`);
            if (!response.ok) {
                throw new Error("There was an error fetching the watchlist");
            }

         const rawData = await response.json();

            console.log(`Watchlist data: ${JSON.stringify(rawData)}`);

            setWatchItems(rawData);
        } catch (error) {
            console.log(error);
            setError(error.message); // Capture any errors
        }
    };

    if (error) {
        return <div>Error: {error}</div>; // Display error message if any
    }

    return (
        <>
            <h1>WatchList</h1> 
            <ul>
                {watchItems.map((item) => (
                    <li key={item.symbol}>{item.symbol}</li>
                ))}
            </ul>
        </>
    );
}

export default WatchList;
