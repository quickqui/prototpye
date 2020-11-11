const{ FunctionDefineHelper} = require("@quick-qui/model-defines/");

const list = {
  functions: [
    withPage(
      new FunctionDefineHelper({
        name: "IssueList",
        resource: "Function",
        extend: "functions/list",
      }).wrapped,
      "Function/ALL",
      "List"
    ),
  ],
};
function withPage(fun, path, icon) {
  return { ...fun, annotations: { page: { menuPath: path, icon } } };
}

module.exports = list;
