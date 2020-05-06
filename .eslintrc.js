module.exports = {
  extends: ["prettier", "get-off-my-lawn"],
  plugins: ["simple-import-sort"],
  rules: {
    // enable: eslint-plugin-simple-import-sort
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",
  },
}
