const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');

    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status}`);
    }

    const data = await response.text(); 
    console.log('Fetched Google homepage HTML:');
    console.log(data.slice(0, 500)); 
  } catch (error) {
    console.error('Error fetching Google page:', error.message);
  }
}

fetchGoogleHomePage();
