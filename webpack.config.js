const path = require("path")
require("dotenv").config()
const { logMSG, infoMSG, warnMSG, errorMSG } = require("./src/helpers/loging_function")

const config = {
  production: {
    mode: "production",
    entry: "./src/v_logger.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "v_logger.js",
      clean: true,
    },
  },
  development: {
    mode: "development",
    entry: "./src/v_logger.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "v_logger.js",
    },
  },
  none: {
    mode: "none",
    entry: "./src/v_logger.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "v_logger.js",
    },
  },
}

if (typeof process.env.NODE_ENV !== "undefined") {
  infoMSG("FOUND process.env.NODE_ENV === " + process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    module.exports = config.production
  } else if (process.env.NODE_ENV === "development") {
    module.exports = config.development
  } else if (process.env.NODE_ENV === "none") {
    module.exports = config.none;
  } else {
    module.exports = config.production
  }
} else {
  // module.exports = require("./cjs/react.development.js");
  errorMSG("process.env.NODE_ENV === UNDEFINED || WILL SET TO PRODUCTION");
  module.exports = config.production
}
