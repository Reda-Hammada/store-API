"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ProductService_1 = __importDefault(require("../../services/ProductService"));

var ProductRepository_1 = __importDefault(require("../../repositories/ProductRepository"));

var BaseController_1 = __importDefault(require("../BaseController"));

var ProductController =
/*#__PURE__*/
function (_BaseController_1$def) {
  _inherits(ProductController, _BaseController_1$def);

  /**
   *
   * @param ProductService
   */
  function ProductController(productService) {
    var _this;

    _classCallCheck(this, ProductController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductController).call(this));
    _this.productService = productService;
    /**
     * Get all products data
     * @param Response res
     * @return porducts
     */

    _this.getAllProducts = function (res) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const products = await this.productService.getProductsFromRepo();
                // return this.SuccessResponse(
                //   res,
                //   200,
                //   "Products fetched successfully",
                //   'something as data'
                // );
                res.send.status(200).json({
                  msg: "hello",
                  data: {
                    data: "hello"
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    };
    /**
     *
     */


    _this.getOneProduct = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    };
    /**
     *
     */


    _this.createProduct = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    };
    /**
     *
     */


    _this.updateProduct = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    };
    /**
     *
     */


    _this.deleteProduct = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
    };
    /**
     *
     */


    _this["delete"] = function () {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
    };

    return _this;
  }

  _createClass(ProductController, null, [{
    key: "createInstance",
    value: function createInstance(productService) {
      return new ProductController(new ProductService_1["default"](new ProductRepository_1["default"]()));
    }
  }]);

  return ProductController;
}(BaseController_1["default"]);

exports["default"] = ProductController;