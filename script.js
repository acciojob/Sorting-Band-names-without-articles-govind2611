// List of band names
const bandNames = ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones", "Aerosmith", "Anthrax", "Metallica"];

// Function to remove articles from the band name
function removeArticles(bandName) {
  const articles = ["a", "an", "the"];
  const words = bandName.split(" ");
  return words.filter((word) => !articles.includes(word.toLowerCase())).join(" ");
}

// Sort the band names without articles in lexicographic order
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Generate the HTML code
let htmlCode = "<ul id='band'>\n";
sortedBandNames.forEach((bandName) => {
  htmlCode += `<li>${removeArticles(bandName)}</li>\n`;
});
htmlCode += "</ul>";

// Print the HTML code
console.log(htmlCode);
