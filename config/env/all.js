// default app configuration
module.exports = {
    port: process.env.PORT || 4000,
    db:  process.env.MONGOLAB_URI || process.env.MONGODB_URL || "mongodb://nodegoat:owasp@widmore.mongohq.com:10000/nodegoat",
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    // hostName as seen by the OWASP Zap container.
    // This may be different, but once you have the Zap container running,
    // do an ifconfig on your physical host and you'll see what docker has assigned to your physical host.
    hostName: "172.17.0.1"    
};
