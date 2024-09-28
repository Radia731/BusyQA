

const CryptoCard = (props) => {

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
            </div>

    </>

} 

export default CryptoCard;