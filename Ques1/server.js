const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
