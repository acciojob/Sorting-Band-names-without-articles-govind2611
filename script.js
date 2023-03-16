let bandNames = ["The Beatles", "Rolling Stones", "Led Zeppelin", "Pink Floyd", "The Who", "The Doors"];

const express = require('express');
const path = require('path');
// Function to remove articles from band names
function removeArticle(bandName) {
  // List of articles to remove
  let articles = ["a", "an", "the"];
  // Split band name into words
  let words = bandName.split(" ");
  // Check if first word is an article
  if (articles.includes(words[0].toLowerCase())) {
    // Remove the article
    words.shift();
  }
  // Join the remaining words and return the modified band name
  return words.join(" ");
}

const app = express();
// Sort the band names in lexicographic order excluding articles
bandNames.sort(function(a, b) {
  return removeArticle(a).localeCompare(removeArticle(b));
});

app.use(express.static(__dirname))
// Get the ul element with id 'band'
let ulElement = document.getElementById("band");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
// Loop through the sorted band names and add them as li elements to the ul element
for (let i = 0; i < bandNames.length; i++) {
  let liElement = document.createElement("li");
  liElement.textContent = bandNames[i];
  ulElement.appendChild(liElement);
}