const express = require('express');
const app = express();
const port = 4000;

app.get('/user', (req, res) => {
    console.log('GET /');
    res.json({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    });
});

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 }
    ]);
});

app.get('/stores', (req, res) => {
    res.json([
        { id: 1, name: 'Store 1', location: 'New York' },
        { id: 2, name: 'Store 2', location: 'Los Angeles' }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});