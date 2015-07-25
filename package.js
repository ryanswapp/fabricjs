Package.describe({
  name: "ryanswapp:fabricjs",
  summary: "Wrapper for Fabric.js, a javascript library for working with canvas",
  version: "0.1.1",
  git: "https://github.com/ryanswapp/fabricjs"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor", "ddp", "jquery"]);

  api.addFiles("client/fabric.min.js", ["client"]);
});






Package.onTest(function (api) {
  api.use(["mike:mocha-package", "practicalmeteor:chai"]);
  api.use("ryanswapp:fabricjs");

  api.addFiles("tests/client/index.js", ["client"]);

});
