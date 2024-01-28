"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class Validator {
}
Validator.productValidator = () => {
    return [
        (0, express_validator_1.body)("productName")
            .notEmpty()
            .trim()
            .escape()
            .withMessage("A product must have a name"),
        (0, express_validator_1.body)("price")
            .isNumeric()
            .withMessage("A product should be a number")
            .notEmpty()
            .withMessage("A product must have a price")
            .trim()
            .escape(),
        (0, express_validator_1.body)("categoryId")
            .notEmpty()
            .withMessage("a category should be assigned to product")
            .trim()
            .escape(),
        (0, express_validator_1.body)("sizes").optional().isJSON(),
        (0, express_validator_1.body)("colors").optional().isJSON(),
    ];
};
Validator.categoryValidator = () => {
    return [
        (0, express_validator_1.body)("categoryName")
            .notEmpty()
            .trim()
            .escape()
            .withMessage("A category should have a name"),
    ];
};
Validator.userValidator = () => { };
exports.default = Validator;
