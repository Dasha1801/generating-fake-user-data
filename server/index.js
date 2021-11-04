const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "saimon1506",
  database: "faker_users",
});

app.post("/", (rej, res) => {
  const name = rej.body.name;
  const address = rej.body.address;
  const tel = rej.body.tel;
  const id = rej.body.id;

  db.query(
    "INSERT INTO users (name, address, tel, id) VALUES (?,?,?,?)",
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

app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
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
