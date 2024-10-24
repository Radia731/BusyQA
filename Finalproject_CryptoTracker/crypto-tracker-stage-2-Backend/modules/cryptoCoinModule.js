const { coinMarketCapApiKey, coinMarketCapApiurl } = require('./configModule')

const getCryptocoins = async() => {
console.log(`fetching from coinmarketcap`)
    try {
        const response = await fetch(coinMarketCapApiurl, {

            headers: {'X-CMC_PRO_API_KEY': coinMarketCapApiKey},
            params: {
              start: 1,
              limit: 10,
              Convert: 'USD'
    
            }
          }) ;
    
        if(!response.ok){
            throw new Error (`there was an error loading the data...`)
          }
            const rawData = await response.json();    
            console.log(`coin market data: ${JSON.stringify(rawData)}`)

                //  return rawData.data;
        const dtoData = rawData.data.map((coin)=>{
            return {
                id:  coin.id,
                symbol: coin.symbol,
                name: coin.name,
                price: coin.quote?.USD?.price || 0, 
                marketCap: coin.quote?.USD?.market_cap || 0,
                volume24h: coin.quote?.USD?.volume_24h || 0,
                change24h: coin.quote?.USD?.percent_change_24h || 0,
            }
        })

        return dtoData;

    } catch (ex) {
        console.log(ex)
    }
}
module.exports = {
    getCryptocoins,
};
