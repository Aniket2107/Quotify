const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

//Routes
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/User");
const quoteRoute = require("./Routes/Quote");
const catRoute = require("./Routes/Category");
const favRoute = require("./Routes/Favourites");

//mongo connect
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log("DB connected")
);

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", quoteRoute);
app.use("/api", catRoute);
app.use("/api", favRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
