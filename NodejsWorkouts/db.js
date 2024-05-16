const mongoose = require("mongoose");

const db = async()=>{
    try {
        const conn  =  await mongoose.connect('mongodb://127.0.0.1:27017/Nodetestdb',{

       })

       console.log(`conneted to your DB ${conn.connection.host}`)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = db