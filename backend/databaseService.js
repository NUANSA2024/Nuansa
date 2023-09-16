const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const storeSale = async (name, email, phone, category, quantity) => {
    try {
        const docRef = await db.collection('customers').doc(name).set({
            name,
            email,
            phone,
            category,
            quantity,
            timestamp: Timestamp.now(),
        });
        console.log('Document written with ID: ', docRef.id);
        return docRef.id;
    } catch (err) {
        console.error('Error adding document: ', err);
    }
}

module.exports = { storeSale };