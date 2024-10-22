const getCryptocoins = async() =>{
console.log(`fetcgdata from coinmarket cap`)
    try {
        const response = await fetch(coinMarketCapApiurl, {

            headers: {
              
              'X-CMC_PRO_API_KEY': coinMarketCapApiKey
    
            },
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
                 console.log(`coin market data ${JSON.stringify(rawData)}`)
    } catch (ex) {
        console.log(ex)
    }
}
module.export={
    getCryptocoins
}