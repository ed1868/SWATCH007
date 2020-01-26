require("dotenv").config();

const port = 3005;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const express = require("express");
const favicon = require("serve-favicon");

const hbs = require("hbs");

const mongoose = require("mongoose");

const logger = require("morgan");
const path = require("path");
const ensureLogin = require("connect-ensure-login");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
var cors = require('cors');
const enigma = require("./BankWires/accounts");

mongoose
  .connect("mongodb://localhost/signalConnected", { useNewUrlParser: true })
  .then(x => {
    let dbName = "MI6 DATABASE ENTERED:";
    console.log(`SUCCESSFULLY CONNECTED: ${dbName}`);
    enigma();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

// WE MAKE AN APP VARIABLE THAT USES EXPRESS THAT WAY WE CAN USE ALL JAVASCRIPT FUNCTIONS ON OUR BACKEND
const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

//INSERT RANDOM USER TO DB

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerHelper("ifUndefined", (value, options) => {
  if (arguments.length < 2) {
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  }
  if (typeof value !== undefined) {
    return options.inverse(this);
  }
  return options.fn(this);
});

hbs.registerHelper("tern", (value, options) => {
  return !value ? "" : "checked";
});

hbs.registerHelper("ifitsMe", (value, value1, options) => {
  return value == value1
    ? new hbs.SafeString(
        `<a href="/place/delete/opinionDelete/{{this._id}}/{{this.idPlace}}"><button type="button" id="deleteOpinion">Delete</button></a>`
      )
    : "";
});

app.use(cors());


// Enable authentication using session + passport
app.use(
  session({
    secret: "irongenerator",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(flash());
// require('./passport')(app);

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

const safeRoute = require("./routes/routingNumber");

app.use("/auth", safeRoute);

// const authRoutes = require('./routes/auth');

// app.use('/auth', authRoutes);

// const taskRoutes = require('./routes/tasks');

// app.use('/tasks', taskRoutes);

module.exports = app;
