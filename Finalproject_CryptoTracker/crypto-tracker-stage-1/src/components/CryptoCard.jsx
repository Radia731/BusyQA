// // import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CryptoCard = (props) => {

    const handleAddWatchList = () => {
        alert(`Add to watchlist`)
    }
    return <> 
         <div className="crypto-card">
         <img
                  src={'https://s2.coinmarketcap.com/static/img/coins/64x64/'+props.id+'.png'}
                    alt={props.name}
                    width="32" height="32"
                  
                />
                <h2>{props.name}</h2>
                <p>Current Price:{props.quote.USD.price.toFixed(2)}</p>
                <p> Market Cap:{props.quote.USD.market_cap.toLocaleString()} </p>
                <p>24h Volume:{props.quote.USD.volume_24h.toLocaleString()}  </p>
                <p>24h Change:{props.quote.USD.percent_change_24h.toLocaleString()}</p>
                <button onClick={handleAddWatchList}> Add to watchList</button>
            </div>

    </>

} 

export default CryptoCard;