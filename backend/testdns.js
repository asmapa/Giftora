const dns = require("dns");

dns.setServers(["8.8.8.8"]);

dns.resolveSrv(
  "_mongodb._tcp.cluster0.ghejcwf.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);