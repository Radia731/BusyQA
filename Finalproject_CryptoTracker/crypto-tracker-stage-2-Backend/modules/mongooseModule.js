const WatchItem= require('../models/watchItem')

const getWatchItemSymbols = async () =>{

    const watchItems = await WatchItem.find({});

    const watchSymbols = watchItems.map(item => item.symbol)

    return watchSymbols;

}

module.exports = {
    getWatchItemSymbols
}