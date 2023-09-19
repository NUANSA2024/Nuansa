const express = require('express');
const cors = require('cors');
const app = express();
const emailService = require('./emailService');
const databaseService = require('./databaseService');

const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/read-email', async (req, res) => {
    try {
        let { email } = req.query;
        const result = await emailService.readEmail(email)
        await res.json(result)
    } catch (err) {
        console.error('Error fetching emails', err);
        res.status(500).json({ error: err.message });
    }
})

app.post('/send-email', async (req, res) => {
    try {
        let { email } = req.query;
        const result = await emailService.sendEmail(email)
        await res.json(result)
    } catch (err) {
        console.error('Error sending email', err);
        res.status(500).json({ error: err.message });
    }
})

// function to update backend when user has submitted payment form
// IMPT: without payment confirmation
app.post('/store-sale', async (req, res) => {
    try {
        let { name, email, phone, category, quantity } = req.body;
        const result = await databaseService.storeSale(name, email, phone, category, quantity);
        await res.json(result)
    } catch (err) {
        console.error('Error updating user data', err);
        res.status(500).json({ error: err.message });
    }
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Server is running on port 3001');
});