const express = require('express');
const cors = require('cors')
const { connectToDb } = require('./database/connectionManager')
const WatchItem = require('./models/watchItem');
//express instances
const app = new express ();
const watchListModule = require('./modules/watchListModule');
const { getCryptocoins } = require('./modules/cryptoCoinModule');
const { coinMarketCapApiKey, coinMarketCapApiurl } = require('./modules/configModule');


const port = 3000;
app.use(cors())
//to fetch
app.get('/watchlist', async (req, res) => {
    try {
        const data = await watchListModule.getItems();
        console.log('Fetched watchlist data:', data);
        res.send(data);
        
    } catch (error) {
        console.error(error)
        res.status(500).send('internal server error')
    
    }
})

//to add
app.post('/watchlist', async(req, res) => {
    //updated express, uses request query
    const { symbol } = req.query;
    console.log(JSON.stringify(req.query))
    await watchListModule.addItem(symbol);
    
    res.send()
})
//to delete
app.delete('/watchlist', async (req, res) =>{
    
    const { symbol } = req.query;

    await watchListModule.removeItem(symbol);

    res.send(`server delete received`) 
})
app.get('/cryptocoins', async (req, res) => {
    try {
        const data = await getCryptocoins();
        res.send(data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        res.status(500).send('Internal server error');
    }
});


// let's us connect to monodb and then start the server afterwards
connectToDb().then(() => {
    console.log(`mongoDb connection completed...`)

    app.listen(port, '0.0.0.0', () => {
        console.log(`CORS - enabled express server staretd on ${port}`)})
})





