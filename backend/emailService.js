const { map } = require("bluebird");

var Imap = require("imap"),
    inspect = require("util").inspect;

const imapConfig = {
    user: 'b.sjarifjp@gmail.com',
    password: 'yjivxxptmmdbngfd',
    host: 'imap.gmail.com',
    port: 993,
    // tls: true,
    tlsOptions: { rejectUnauthorized: false }, //prevent self signed certificate error
    
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
        
        if (imap.state != "authenticated") {
            imap.connect();
        }
    });

    imap.once("error", function (err) {
        console.log(err);
    });

    imap.once("end", function () {
        console.log("Connection ended");
    });

    imap.connect();
}

module.exports = {readEmails};
