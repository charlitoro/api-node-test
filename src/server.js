const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
    res.json({
        id: faker.string.uuid(),
        name: faker.internet.username(),
        email: faker.internet.email(),
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
