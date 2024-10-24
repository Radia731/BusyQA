import {useState, useEffect}  from 'react';
import SearchPanel from "./SearchPanel"
import CryptoCard from "./CryptoCard";
import { coinMarketCapApiKey, coinMarketCapApiurl } from '../common/constants'


const CryptoDashboard = () => {
  
    const [coinData, setCoinData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [sortType, setSortType] = useState(["market_cap"])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  const handleSortType = (sortType) => {
      console.log(`sort type changeed... ${sortType}`)

       setSortType(sortType)

  }

    const handleSearch = (searchText) => {    
      if (searchText === "") {
        alert(`Enter a crypto coin to search`)

        setFilterData(coinData);
        return;
      }
  //filtering the coins 
 
     const filterCoins = coinData?.filter(coin =>coin.name.toLowerCase().includes(searchText.toLowerCase()))
              .sort((a,b) => {
                    const aValue = a.qoute.USD[sortType];
                    const bValue = b.qoute.USD[sortType];
                    return bValue - aValue;
              });
              console.log(filterCoins)

              setFilterData(filterCoins);

  }

  useEffect(() => {

    console.log(`component mounted...`)

      fetchServerCoinData();
    // fetchCoinData();
  }, [])

  const fetchServerCoinData = async() => {

    console.log(`fetch server data...`)
    
    try {
        const response = await fetch(`http://localhost:3000/cryptocoins`);

        if(!response.ok){
          throw new Error(`there was an error loading the data...`)
        }
          const rawData = await response.json();    
              console.log(`coin market data: ${JSON.stringify(rawData)}`)
                  setCoinData(rawData);
                  setFilterData(rawData);
    } catch (error) {
         setError(error)
    }
   finally {
        setIsLoading(false)
   } 

  }

  if (isLoading){
    return <div style={{text: 'center'}}>Loading.....</div>
  }
  if (error){
    return <div style={{text: 'center'}}> { error.message} </div>
  }
    return (
      <>
        <div className="app">
            <h1>Crypto Coin Tracker</h1> 
            <SearchPanel  searchCallback={handleSearch}
            sortTypeCallback={handleSortType} />
            
          {/* Adding the card div */}
          <div className="crypto-container">
                
           { 
              filterData?.map((currentCoin) => {
             return <CryptoCard {...currentCoin} 
                 />
           })
           }
          </div> 
          </div>
      </>
    )
  }
  
  export default CryptoDashboard;
  


 