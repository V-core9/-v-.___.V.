const path = require("path");

module.exports = {
  entry: "./src/v_logger.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
