"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var app_1 = __importDefault(require("./app"));

var port = env.port;
app_1["default"].listen(port, function () {
  console.log("App is  running in port ".concat(port, " \uD83D\uDE0E "));
});