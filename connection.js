const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@chatapp.lkzrxmv.mongodb.net/?retryWrites=true&w=majority`,()=>{
    console.log('connected to mongoDB');
})