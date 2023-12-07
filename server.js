const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simulated database
const users = [
    { username: 'user', password: 'password' }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check against the simulated database (replace this with your database logic)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Serve Landing Page.html for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Landing Page.html'));
});

// Handle other routes by serving the corresponding HTML files
app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'public', `${page}.html`));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
