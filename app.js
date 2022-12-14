require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const categoriesRouter = require("./routes/categories");
const itemRouter = require("./routes/item");
const compression = require("compression");
const helmet = require("helmet");

var app = express();

app.use(compression());
app.use(helmet());
// Connect to mongoDB
const { connect, connection } = require("mongoose");
const mongoDB = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.mgngurm.mongodb.net/?retryWrites=true&w=majority`;
connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/item", itemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
