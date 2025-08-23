const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

const routes = require('./router');

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})