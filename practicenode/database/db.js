const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/practice",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

