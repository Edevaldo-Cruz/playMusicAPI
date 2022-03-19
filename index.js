const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

let db = [
  {
    id: "1",
    title: "Carreira de sucesso",
    date: "01/10/2021",
    author: "DIO",
    source: "DIO",
    uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3",
    imageSource: "https://i.ibb.co/FYjqrST/cover.png",
  },
  {
    id: "2",
    title: "Qual a importancia da comunidade na vida de um dev",
    date: "01/10/2021",
    author: "DIO",
    source: "DIO",
    uri: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3",
    imageSource: "https://i.ibb.co/FYjqrST/cover.png",
  },
  {
    id: "3",
    title: "Carreira de sucesso",
    date: "01/10/2021",
    author: "DIO",
    source: "DIO",
    uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3",
    imageSource: "https://i.ibb.co/FYjqrST/cover.png",
  },
  {
    id: "4",
    title: "Qual a importancia da comunidade na vida de um dev",
    date: "01/10/2021",
    author: "DIO",
    source: "DIO",
    uri: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3",
    imageSource: "https://i.ibb.co/FYjqrST/cover.png",
  },
  {
    id: "5",
    title: "Carreira de sucesso",
    date: "01/10/2021",
    author: "William Shakespeare",
    source: "Librivox",
    uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3",
    imageSource: "https://i.ibb.co/FYjqrST/cover.png",
  },
  {
    id: "6",
    title: "Qual a importancia da comunidade na vida de um dev",
    date: "01/10/2021",
    author: "DIO",
    source: "DIO",
    uri: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3",
    imageSource: "https://i.ibb.co/FYjqrST/cover.png",
  },
];

app.get("/playlist", (req, res) => {
  return res.json(db);
});

app.listen(7777, () => {
  console.log("Servidor online!!");
  console.log(`Express started at http://localhost:7777`);
});
