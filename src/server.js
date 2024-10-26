const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
    res.json({
        id: 1,
        name: 'Hoveimar CBUM',
        email: 'john.doe@example.com',
        role: 'olympia',
        created_at: '2021-01-01 10:00:00',
    });
});

app.get('/api/stores', (req, res) => {
    res.json([
        { id: 1, name: 'Store 1', location: 'New York' },
        { id: 2, name: 'Store 2', location: 'Los Angeles' }
    ]);
});

app.get('/api/pets', (req, res) => {
    res.json([
        { id: 1, name: 'Pet 1', type: 'Dog' },
        { id: 2, name: 'Pet 2', type: 'Cat' }
    ]);
});

app.get('/api/carts', (req, res) => {
    res.json([
        { id: 1, name: 'Cart 1', total: 1000 },
        { id: 2, name: 'Cart 2', total: 2000 }
    ]);
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});
