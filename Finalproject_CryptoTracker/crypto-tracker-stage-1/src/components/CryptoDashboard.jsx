const CryptoDashboard = () => {
    return (
      <>
          <div className="app">
            <h1>Crypto Coin Tracker</h1>
            <input type="text" placeholder="Search Crypto" value="" />
            <select>
              <option value="market_cap">Market Cap</option>
              <option value="current_price">Price</option>
              <option value="total_volume">24h Volume</option>
              <option value="price_change_percentage_24h">24h Change</option>
            </select>
          </div>
  
          {/* Adding the card div */}
          <div className="crypto-container">
                {/* -----------Bitcoin------------------ */}
            <div className="crypto-card">
              <img
                src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                alt="Bitcoin"
              />
              <h2>Bitcoin</h2>
              <p>Current Price</p>
              <p>Market Cap</p>
              <p>24h Volume</p>
              <p>24h Change</p>
            </div>
            {/* -------------Ethereum------------ */}
            <div className="crypto-card">
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
            {/* -------------DogeCoin---------------- */}
            <div class="crypto-card">
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
            
            <div class="crypto-card">
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
            <div class="crypto-card">
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
            <div class="crypto-card">
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
            <div class="crypto-card">
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
          </div>
        
      </>
    )
  }
  
  export default CryptoDashboard;
  