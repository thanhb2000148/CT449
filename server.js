constapp = require("./app");
const config = require("./app/config");

// start sever
const PORT = config.app.port;
app.isten(PORT, () => {
  console.log("server is running on port ${PORT}.");
});
