const WatchItem= require('../models/watchItem')

const addItem = async (symbol) => {
    //error handling 
    try {
    if(!symbol){
        console.log(`symbol is not valid`)
    }

    console.log(`item ${symbol} added to watchlist`)

    const item = new WatchItem({
        symbol: symbol,
        dateCreated: Date.now()
    })

   await item.save();
    
} 
catch (err) {
    console.log(`error adding item: ${err}`)
}
}

const removeItem = async (symbol) => {
    
    try {
        if(!symbol){
            console.log(`symbol is not valid`)
        }
         
        console.log(`item ${symbol} removed from watchlist`)
    
        await WatchItem.deleteOne({
            symbol: symbol
        })
        
    } 
    catch (err) {
        console.log(`error removing item ${err}`)
    }

}

const getItems = async () => {
    try {
        
        const items = await WatchItem.find({})
        return items;
    
    } 
    catch (err) {
    console.log(`error fecthing ${err}`)
    
    }
}


module.exports = {
    addItem,
    removeItem,
    getItems
}