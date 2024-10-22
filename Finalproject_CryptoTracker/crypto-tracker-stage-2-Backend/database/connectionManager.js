const mongoose = require('mongoose')

const dburl = "mongodb+srv://rad:4240Muhammed$$$@cyrptocointracker.s6j7v.mongodb.net/"
 
//creating a fucntion to encapsulate

const connectToDb =  async () => {


const dbConnection = mongoose.connection;

dbConnection.on('open', () => {
    console.log(`connected to MongoDb`) })

dbConnection.on('error', (err) => {
    console.log(`MongoDb connection error: ${err}`) })

 await mongoose.connect(dburl);

}
module.exports = {
    connectToDb
}