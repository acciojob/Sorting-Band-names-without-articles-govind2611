// Input array of band names
let bandNames = ["The Beatles", "Rolling Stones", "Led Zeppelin", "Pink Floyd", "The Who", "The Doors"];

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

// Sort the band names in lexicographic order excluding articles
bandNames.sort(function(a, b) {
  return removeArticle(a).localeCompare(removeArticle(b));
});

// Get the ul element with id 'band'
let ulElement = document.getElementById("band");

// Loop through the sorted band names and add them as li elements to the ul element
for (let i = 0; i < bandNames.length; i++) {
  let liElement = document.createElement("li");
  liElement.textContent = bandNames[i];
  ulElement.appendChild(liElement);
}