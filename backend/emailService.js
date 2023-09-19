const { map } = require("bluebird");

var Imap = require("imap"),
    inspect = require("util").inspect;

const imapConfig = {
    user: "b.sjarifjp@gmail.com",
    password: "yjivxxptmmdbngfd",
    host: "imap.gmail.com",
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }, //prevent self signed certificate error
};

const imap = new Imap(imapConfig);

async function readEmails(email) {
    // imap.once("error", function (err) {
    //     console.log(err);
    // });

    // imap.once("ready", function () {
    //     imap.openBox("INBOX", false, () => {
    //         imap.search(
    //             ["FROM", "no-reply@accounts.google.com"],
    //             function (err, results) {
    //                 const mail = imap.fetch(results, { bodies: "" });
    //                 mail.on("message", function (msg, seqno) {
    //                     console.log("Message #%d", msg);
    //                 });
    //             }
    //         );
    //     });

    //     if (imap.state != "authenticated") {
    //         imap.connect();
    //     }
    // });

    // imap.once("end", function () {
    //     console.log("Connection ended");
    // });

    // imap.connect();

    function openInbox(cb) {
        imap.openBox("INBOX", true, cb);
    }

    imap.once("ready", function () {
        openInbox(function (err, box) {
            if (err) throw err;
            var f = imap.seq.fetch(['FROM', 'Google <no-reply@accounts.google.com>'], {
                bodies: "HEADER.FIELDS (FROM TO SUBJECT DATE)",
                struct: true,
            });
            f.on("message", function (msg, seqno) {
                console.log("Message #%d", seqno);
                var prefix = "(#" + seqno + ") ";
                msg.on("body", function (stream, info) {
                    var buffer = "";
                    stream.on("data", function (chunk) {
                        buffer += chunk.toString("utf8");
                    });
                    stream.once("end", function () {
                        console.log(
                            prefix + "Parsed header: %s",
                            inspect(Imap.parseHeader(buffer))
                        );
                    });
                });
                msg.once("attributes", function (attrs) {
                    console.log(
                        prefix + "Attributes: %s",
                        inspect(attrs, false, 8)
                    );
                });
                msg.once("end", function () {
                    console.log(prefix + "Finished");
                });
            });
            f.once("error", function (err) {
                console.log("Fetch error: " + err);
            });
            f.once("end", function () {
                console.log("Done fetching all messages!");
                imap.end();
            });
        });
    });

    imap.once("error", function (err) {
        console.log(err);
    });

    imap.once("end", function () {
        console.log("Connection ended");
    });

    imap.connect();
}

module.exports = { readEmails };
