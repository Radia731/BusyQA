const CryptoCard = (props) => {
    console.log(`card data ${JSON.stringify(props)}`)

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

            <p>Current Price: ${props.price.toFixed(2)}</p>
            <p>Market Cap: ${props.marketCap.toLocaleString()}</p>
            <p>24h Volume: ${props.volume24h.toLocaleString()}</p>
            <p>24h Change: {props.change24h.toFixed(2)}%</p>
            
            <button onClick={handleAddWatchList} style={{borderRadius: "5px", backgroundColor: props.isWatched ? "lightblue" : ""}}
            disabled={!props.isWatched}>Add to watchList </button>
            </div>

    </>

} 

export default CryptoCard;