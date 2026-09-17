const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "THRIVE backend is running!"
    });
});

app.listen(PORT, () => {
    console.log(`THRIVE backend running on port ${PORT}`);
});