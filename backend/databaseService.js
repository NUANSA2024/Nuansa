const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const storeSale = async (name, email, phone, category, quantity) => {
    try {
        console.log(name, email, phone, category, quantity)
        const docRef = await db.collection('customers').doc(name + ' - ' + email).set({
            name,
            email,
            phone,
            category,
            quantity,
            timestamp: Timestamp.now(),
        });
        console.log('Document written for: ', name);
        return 'success';
    } catch (err) {
        console.error('Error adding document: ', err);
    }
}

module.exports = { storeSale };