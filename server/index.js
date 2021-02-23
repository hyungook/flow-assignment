import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1q2w3e4r",
  database: "example",
});

// env

app.post("/create", (req, res) => {
  console.log(req.body);
  const custom = req.body.custom;

  db.query(
    "insert into testboard (customword) values(?)",
    custom,
    (err, result) => {
      if (err) {
        console.warn(err);
      } else {
        res.send("Inserted");
      }
    }
  );
});

app.get("/keyword", (req, res) => {
  db.query("select id,customword from testboard", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  db.query("delete from testboard where id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(req.params.id);
    }
  });
});

app.listen(4000, () => {
  console.log("server runnig on port 4000");
});
