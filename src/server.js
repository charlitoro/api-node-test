const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
    res.json({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        created_at: '2021-01-01 10:00:00',
    });
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]);
});

app.get('/api/stores', (req, res) => {
    res.json([
        { id: 1, name: 'Store 1', location: 'New York' },
        { id: 2, name: 'Store 2', location: 'Los Angeles' }
    ]);
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});