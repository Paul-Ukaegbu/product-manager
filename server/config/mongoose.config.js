const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/productDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("Database Connected"))
    .catch(err => console.log("Something Went wrong connecting to database", err))