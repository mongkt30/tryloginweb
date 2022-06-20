const express = require('express');//finish
const app = express();
const cors = require( 'cors');
const userRoutes = require('./routes/userRoutes')
require ('./connection')


// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))
app.use('/users', userRoutes)
// app.get('/', (req, res) => {
//   res.send('root')
// })

app.listen(8082,()=>{
  console.log('Server is running')
})
