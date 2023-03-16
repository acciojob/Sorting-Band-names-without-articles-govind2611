const bandNames = ["The Beatles", "Led Zeppelin", "Aerosmith", "Nirvana", "Queen", "The Who", "Anthrax"];

// Define a regular expression pattern to match any of the excluded articles
const excludedArticles = /^(?:a|an|the)\s+/i;

// Sort the band names in lexicographic order, excluding any articles
const sortedBandNames = bandNames.sort((a, b) => {
  // Remove any excluded articles from the beginning of each band name
  const aCleaned = a.replace(excludedArticles, '');
  const bCleaned = b.replace(excludedArticles, '');
  
  // Compare the cleaned band names in lexicographic order
  return aCleaned.localeCompare(bCleaned);
});

// Get the UL element with ID 'band'
const bandList = document.getElementById('band');

// Create an LI element for each band name, and add it to the UL element
sortedBandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});