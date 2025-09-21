const express = require('express');
const cors = require('cors')
const productRouter = require('./routers/product.router.js')
const connectDB = require('./config/mongo.js')
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.use('/product', productRouter);

app.listen(3000, ()=>{
    console.log('Server Started at port 3000')
});
