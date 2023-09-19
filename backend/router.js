const express = require('express');
const cors = require('cors');
const app = express();
const emailService = require('./emailService');

const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.get('/read-emails', async (req, res) => {
    try {
        console.log("read-emails");
        const data = req.body;
        const result = await emailService.readEmails('no-reply@accounts.google.com');
        res.json(result);
    } catch (err) {
        console.error('Error fetching emails', err);
        res.status(500).json({ error: err.message });
    }
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Server is running on port 3001');
});