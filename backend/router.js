const app = require('express');
const emailService = require('./emailService');

app.post('/read-emails', async (req, res) => {
    try {
        const data = req.body;
        const result = await emailService.readEmails(data);
        res.json(result);
    } catch (err) {
        console.error('Error fetching emails', err);
        res.status(500).json({ error: err.message });
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});