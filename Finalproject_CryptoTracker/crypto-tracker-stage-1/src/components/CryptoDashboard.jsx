//////------imports------//////
import {useState, useEffect}  from 'react';
import SearchPanel from "./SearchPanel"
import CryptoCard from "./CryptoCard";



//////------creating an object to store the data in real time ------//////

// const cryptoCoins= [{

//   Name: "Bitcoin",
//   price: "$234567",
//   marketCap: "$123456765432",
//   change: "6.54%",
//   volume: "$23,244,244",
//   Icon: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
// }, {
//   Name: "Ethereum",
//   price: "$234567",
//   marketCap: "$123456765432",
//   change: "6.54%",
//   volume: "$23,244,244",
//   Icon: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
// }, {
//   Name: "Dogecoin",
//   price: "$234567",
//   marketCap: "$123456765432",
//   change: "6.54%",
//   volume: "$23,244,244",
//   Icon: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409"
// }, {
// }, {
//   Name: "Solana",
//   price: "$234567",
//   marketCap: "$123456765432",
//   change: "6.54%",
//   volume: "$23,244,244",
//   Icon: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"}
// ];



const coinMarketCapApiKey = 'e4d176e0-adfb-41ab-82d4-f67a95893eac'
const coinMarketCapApiurl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

  


const CryptoDashboard = () => {
  
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCoins, setFilteredCoins] = useState([]);

    const handleSearch = (searchText) => {
      if (searchText === "") {

        alert(`Enter a crypto coin to search`)

        setCoinData(data);
        return;
      }
  //filtering the coins 
  const filtered = coinData.filter((coin) =>
  coin.name.toLowerCase().includes(searchText.toLowerCase())
);

      //  console.log(filterCoins);
      setFilteredCoins(filtered)

  }

  useEffect(() => {

    console.log(`component mounted...`)

    fetchData();
  }, [])

  const fetchData = async() => {

    console.log(`fetch data...`);
     try {

      const response = await fetch(coinMarketCapApiurl, {
        headers: {
          
          "X-CMC_PRO_API_KEY": coinMarketCapApiKey

        },
        params: {

        }
      }) ;

      if(!response.ok){
        throw new Error (`there was an error loading the data...`)
      }
      const data = await response.json();
      
      setCoinData(data);
     }

     
     catch (error) {
        setError(error)

     }
     finally {
        
      setisLoading(false)
       
     }
    
  }
  if (isLoading){
    return <div style={{text: 'center'}}>Loading.....</div>
  }
  if (error){
    return <div style={{text: 'center'}}> { error } </div>
  }
    return (
      <>
        <div className="app">
            <h1>Crypto Coin Tracker</h1> 
            <SearchPanel  searchCallback={handleSearch} />
            
          {/* Adding the card div */}
          <div className="crypto-container">
                
           { 
              coinData.data.map((currentCoin) => {
             return <CryptoCard {...currentCoin} 
                 />
           })
            
           }
            
            
            {/* <div className="crypto-card">
              <img
                src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                alt="Ethereum"
              />
              <h2>Ethereum</h2>
              <p>Current Price</p>
              <p>Market Cap</p>
              <p>24h Volume</p>
              <p>24h Change</p>
            </div>
            <div className="crypto-card">
              <img
                src="https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409"
                 alt="Dogecoin"
              />
                <h2>Dogecoin</h2>
                <p>Current Price</p>
                <p>Market Cap</p>
                <p>24h volumn</p>
                <p>24h Change</p>
             </div>
             {/* -------------Solana------------------- */}
            
            {/* <div className="crypto-card">
               <img
               src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"
               alt="Solana"
               />
                <h2>Solana</h2>
                <p>Current Price</p>
                <p>Market Cap</p>
                <p>24h volumn</p>
                <p>24h Change</p>
             </div>
            <div className="crypto-card">
               <img
               src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"
               alt="Solana"
               />
                <h2>Solana</h2>
                <p>Current Price</p>
                <p>Market Cap</p>
                <p>24h volumn</p>
                <p>24h Change</p>
             </div>
            <div className="crypto-card">
               <img
               src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"
               alt="Solana"
               />
                <h2>Solana</h2>
                <p>Current Price</p>
                <p>Market Cap</p>
                <p>24h volumn</p>
                <p>24h Change</p>
             </div>
            <div className="crypto-card">  
               <img
               src="https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756"
               alt="Solana"
               />
                <h2>Solana</h2>
                <p>Current Price</p>
                <p>Market Cap</p>
                <p>24h volumn</p>
                <p>24h Change</p>
             </div>  */}
          </div> 
          </div>
      </>
    )
  }
  
  export default CryptoDashboard;
  