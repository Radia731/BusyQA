const mongoose = require('mongoose');
const User = require('./user')


mongoose.connect('mongodb+srv://rad:ofEMLMy1QiRKGfEW@rads.ooht1.mongodb.net/' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const db = mongoose.connection;

db.on('error', (error) => {
    console.error ('MongoDB Connection Error:', error);
})

db.once('open', async () => {
    console.log('connected to MongoDB');

    try {
        const newUser = new User({
            name: 'John Doe',
            email: 'John@example.com',  // Corrected email field
            age: 30,
        });

        await newUser.save();

        console.log('user saved successfully');
    } catch (error) {
        console.log('error saving user', error);
    } finally {
        mongoose.connection.close();
    }
});
