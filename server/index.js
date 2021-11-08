const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://task-5.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db_config = {
  user: "b5adcc5cb9c065",
  host: "eu-cdbr-west-01.cleardb.com",
  password: "d2a0bb74",
  database: "heroku_1c4d5625035b043",
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);
  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();

app.post("/", (rej, res) => {
  const name = rej.body.name;
  const address = rej.body.address;
  const tel = rej.body.tel;
  const id = rej.body.id;

  db.query(
    "INSERT INTO users_ua (name, address, tel, id) VALUES (?,?,?,?)",
    [name, address, tel, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/ru", (req, res) => {
  connection.query("SELECT * FROM users_ru", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/usa", (req, res) => {
  connection.query("SELECT * FROM users_usa", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ua", (req, res) => {
  connection.query("SELECT * FROM users_ua", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.set("port", process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log("Yey, your server is running on port 3001");
});
