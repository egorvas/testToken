
module.exports = {

  networks: {

    development: {
     host: process.env.HOST || "127.0.0.1",     // Localhost (default: none)
     port: process.env.PORT || 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    "reporter": "mocha-junit-reporter"
  },

  compilers: {
    solc: {
       optimizer: {
         enabled: false,
         runs: 200
       },

    }
  }
}
