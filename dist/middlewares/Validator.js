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
        (0, express_validator_1.body)("images")
            .custom((value, { req }) => {
            var _a;
            const allowedExtensions = [
                "image/png",
                "image/jpeg",
                "image/jpg",
                "image/svg",
            ];
            if ((_a = req === null || req === void 0 ? void 0 : req.files) === null || _a === void 0 ? void 0 : _a.some((productImage) => !allowedExtensions.includes(productImage.mimetype))) {
                // If any file fails validation, delete the stored files
                req.files.forEach((file) => {
                    // Delete the file by its path
                    const filePath = `src/uploads/images/${file.filename}`;
                    // Use fs.unlinkSync to remove the file synchronously
                });
            }
        })
            .withMessage("Image should be in one of the following formats: png, jpg, jpeg"),
        // .custom((value, { req }) => {
        //   const allowedSize = 104495;
        //   Array.isArray(req.files) &&
        //     req.files.forEach((productImage) => {
        //       if (productImage?.size <= allowedSize) {
        //         return true;
        //       }
        //       return false;
        //     });
        // })
        // .withMessage("Image should be equal or lower than 4 mb"),
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
Validator.signInValidator = () => {
    return [
        (0, express_validator_1.body)("email")
            .notEmpty()
            .trim()
            .isEmail()
            .withMessage("Please enter a valid email")
            .escape(),
        (0, express_validator_1.body)("password")
            .notEmpty()
            .withMessage("Password should not be empty")
            .trim()
            .escape(),
    ];
};
Validator.createUserValidator = () => {
    return [];
};
exports.default = Validator;
