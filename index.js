// Samannoy Bhattacharjee
// Presented for Hackclub
// Pwease vote for me on highseas.hackclub.com

const express = require('express');
const ejs = require("ejs");
const app = express();

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index.ejs');
});

app.post("/shorten", (req, res) => {
   var url = req.body.url;

   var randomUrl = '';

   var list = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '@', '^', '*'
   ];

   for (let i = 0; i < 6; i ++ ) {
      var thi = list[Math.floor(Math.random() * list.length)];
      randomUrl += thi;
   }

   console.log(randomUrl);

   res.send(`Your new URL is: https://samannoyb.hackclub.app/${randomUrl}`);

   app.get(`/${randomUrl}`, (req, res) => {
      res.redirect(url);
   });
});

app.listen(8080, () => console.log("App listening on port 8080!"));