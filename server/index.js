const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "b5adcc5cb9c065",
  host: "eu-cdbr-west-01.cleardb.com",
  password: "d2a0bb74",
  database: "heroku_1c4d5625035b043",
});

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

app.get("/usa", (req, res) => {
  db.query("SELECT * FROM users_usa", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ru", (req, res) => {
  db.query("SELECT * FROM users_ru", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ua", (req, res) => {
  db.query("SELECT * FROM users_ua", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
