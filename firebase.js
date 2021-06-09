const admin = require('firebase-admin');
const serviceAccount = require('./explore-alcanena-d5727-firebase-adminsdk-byp8v-c46fa26656.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://explore-alcanena-d5727-default-rtdb.europe-west1.firebasedatabase.app',
});

const firestore = admin.firestore();

module.exports = firestore;
