const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log(`database is connected successfully`);
}).catch((err) => {
    console.log(`No connection`);
})
