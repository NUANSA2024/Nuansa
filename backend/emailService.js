const { map } = require("bluebird");

var Imap = require("imap"),
    inspect = require("util").inspect;

const imapConfig = {
    user: "nuansatech@yopmail.com",
    port: 993,
    tls: true,
};

const imap = new Imap(imapConfig);

async function readEmails(email) {
    imap.once("ready", function () {
        imap.openBox("INBOX", false, () => {
            imap.search(['FROM', email], function (err, results) {
                const mail = imap.fetch(results, { bodies: "" });
                mail.on("message", function (msg, seqno) {
                    console.log("Message #%d", msg);
                });
            });
        });
    });
}

module.exports = {readEmails};
