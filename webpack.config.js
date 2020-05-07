const path = require("path")

module.exports = {
  entry: path.resolve("src"),
  mode: "production",
  output: {
    filename: "bot.js",
    path: path.resolve(__dirname, "dist"),
  },
}
