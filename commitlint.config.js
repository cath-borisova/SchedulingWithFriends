module.exports = {
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "subject-empty": [2, "always"],
    "function-rules/header-case": [
      2,
      "always",
      (parsed) => {

        return [true];
      },
    ],
  },
};
