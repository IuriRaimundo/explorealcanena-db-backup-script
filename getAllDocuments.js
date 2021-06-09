const firestore = require('./firebase.js');

function getAllDocuments() {
  const collections = ['eventos', 'inscricoes', 'local', 'pedidosDeAlteracao'];
  let log = {};
  return new Promise((resolve, reject) => {
    collections.forEach((collection, index) => {
      firestore
        .collection(collection)
        .get()
        .then((snapshot) => {
          log[collection] = snapshot.docs.map((doc) => doc.data());
        })
        .catch((e) => reject(e))
        .finally(() => {
          if (index === collections.length - 1) resolve(log);
        });
    });
  });
}

module.exports = getAllDocuments;
