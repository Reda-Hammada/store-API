"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class Validator {
}
Validator.productValidator = () => {
    return (0, express_validator_1.checkSchema)({
        productName: {
            isEmpty: {
                negated: true,
                errorMessage: "product name cannot be empty",
            },
            escape: true,
        },
        price: {
            isEmpty: {
                negated: true,
                errorMessage: " a product must have a price",
            },
            escape: true,
            isNumeric: {
                errorMessage: "product price should be a number",
            },
        },
        categoryId: {
            isEmpty: {
                negated: true,
                errorMessage: "a product must be assigned to a category",
            },
            escape: true,
        },
        sizes: {
            isJSON: true,
            optional: true,
            escape: true,
        },
        colors: {
            isJSON: true,
            optional: true,
            escape: true,
        },
    });
};
Validator.categoryValidator = () => {
    return (0, express_validator_1.checkSchema)({
        categoryName: {
            isEmpty: {
                negated: true,
                errorMessage: "A category must have a name",
            },
            escape: true,
        },
    });
};
Validator.userValidator = () => { };
exports.default = Validator;
