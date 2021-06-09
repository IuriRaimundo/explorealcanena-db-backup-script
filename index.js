const fs = require('fs');
const getAllDocuments = require('./getAllDocuments.js');
const getDate = require('./getDate.js');
const sendEmail = require('./sendEmail.js');

getAllDocuments()
  .then((log) => {
    const path = './backups';
    const date = getDate();
    fs.writeFile(`${path}/${date}.json`, JSON.stringify(log), (err) => {
      if (err) return console.log(err);
      console.log('Backup criado.');
      sendEmail(JSON.stringify(log), date);
    });
  })
  .catch((e) => console.log(e));
