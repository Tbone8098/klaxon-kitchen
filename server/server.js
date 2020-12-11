const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

require("./config/mongoose.config");

// use the cors function
app.use(cors());

app.use(express.json()); //Make sure that the .json has the ()!!
app.use(express.urlencoded({ extended: true }));

require("./routes/route.order")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
