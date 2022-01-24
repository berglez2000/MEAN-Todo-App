const express = require('express');

const app = express();

const port = process.env.port || 5000;

app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});