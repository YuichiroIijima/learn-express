const express = require("express");
const app = express();

const server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:", server.address().port);
});

const photoList = [
  {
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo001.jpg"
  },
  {
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo002.jpg"
  }
];

app.get("/api/photo/list", function(req, res, next) {
  res.json(photoList);
});

app.get("/api/photo/:photoId", function(req, res, next) {
  let photo;
  photoList.forEach(p => {
    if (p.id === req.params.photoId) {
      photo = p;
    }
  });
  res.json(photo);
});

// View EngineにEJSを指定
app.set("view engine", "ejs");

// "/"へのGETリクエストでindex.ejsを表示する。拡張子(.ejs)は省略されていることに注意。
app.get("/", function(req, res, next) {
  res.render("index", {});
});
