const mongoose = require('mongoose')
require('dotenv').config()

// mongoose.connect(`mongodb+srv://mongkol:${process.env.DB_PW}@cluster0.ybrye5d.mongodb.net/?retryWrites=true&w=majority&ssl=true`,()=>{
//   console.log('Connected to db')
// })

// mongoose.connect(`mongodb+srv://mongkol:${process.env.DB_PW}@cluster0.ybrye5d.mongodb.net/?retryWrites=true&w=majority`,()=>{
//   console.log('Connected to db')
// })

// mongoose.connect(`mongodb://mongkol:${process.env.DB_PW}@ac-3lhm5y6-shard-00-00.ybrye5d.mongodb.net:27017,ac-3lhm5y6-shard-00-01.ybrye5d.mongodb.net:27017,ac-3lhm5y6-shard-00-02.ybrye5d.mongodb.net:27017/?ssl=true&replicaSet=atlas-nl4nke-shard-0&authSource=admin&retryWrites=true&w=majority`,()=>{
//   console.log('Connected to db')
// })



mongoose.connect(`mongodb+srv://mongkol:1234@cluster0.ybrye5d.mongodb.net/?retryWrites=true&w=majority`,(err) => {
   if(err) console.log(err)
   else console.log("mongdb is connected");
  });


// mongoose.connect(
//   process.env.MONGO_URL,
//   options
// )
// .then(()=>console.log('connected'))
// .catch(e=>console.log(e));
