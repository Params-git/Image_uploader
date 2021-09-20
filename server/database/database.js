const mongoose = require("mongoose");
const config = require("../../config");

const con = new mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true
}).then(() => {
    console.log("connection with database is successful...");
})
.catch((err) => {
    console.log(err);
});