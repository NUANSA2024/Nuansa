var Imap = require("imap");
var simpleParser = require("mailparser").simpleParser;

require('dotenv').config({path: __dirname + '/env/imap.env'});


const imapConfig = {
    user: process.env.IMAP_USER,
    password: process.env.IMAP_PASSWORD,
    host: process.env.IMAP_HOST,
    port: parseInt(process.env.IMAP_PORT),
    tls: process.env.IMAP_TLS === 'true',
    tlsOptions: { rejectUnauthorized: process.env.IMAP_TLS_OPTIONS_REJECT_UNAUTHORIZED === 'true' },
};


const imap = new Imap(imapConfig);

// function that returns an array of messages from an email address
// TODO: change function to be able to filter by user's name
async function readEmails(email) {
    console.log(imapConfig)
    return new Promise((resolve, reject) => {
        let messages = [];
        let messagePromises = [];
        imap.once("ready", async function () {
            imap.openBox("INBOX", false, () => {
                imap.search(['ALL', ['FROM', email]], async (err, results) => {
                    if (err) reject(err);
                    const fetch = await imap.fetch(results, { bodies: "" });
                    fetch.on("message", async function (msg) {
                        const messagePromise = new Promise((resolve, reject) => {
                            try {
                                msg.on("body", async (stream) => {
                                    const parsed = await simpleParser(stream);
                                    await messages.push(parsed.text);
                                    resolve();
                                });
                            } catch (err) {
                                reject();
                            }
                        });
                        messagePromises.push(messagePromise);
                    })

                    fetch.on("end", async () => {
                        await Promise.all(messagePromises);
                        await imap.end();
                        resolve(messages);
                    });
                });
            });
        });


        imap.once("error", function (err) {
            console.log(err);
            reject(err);
        });

        imap.once("end", function () {
            console.log("Connection ended");
        });

        imap.connect();
    });
};

module.exports = { readEmails };
