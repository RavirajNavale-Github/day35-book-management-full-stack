const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { connectMongo } = require('./config/mongoConnect');

const app = express();
const port = 4000;

//connection to database
connectMongo('mongodb+srv://ravirajnavale9899:MongoAtlas@cluster0.toadcrk.mongodb.net/').then(() => {
    console.log('Connected to Database.');
}).catch(() => {
    console.log('Unable to connect.')
});

//middleware
app.use(bodyparser);

//routes
app.use('/books', booksRoute)

app.listen(port, () => {
    console.log('Server is running on port: 4000')
})