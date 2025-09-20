const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('ravi bhai kaise ho');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
