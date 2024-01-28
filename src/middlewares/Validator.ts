import { body, checkSchema, ValidationChain } from "express-validator";
class Validator {
  static productValidator = () => {
    return [
      body("productName")
        .notEmpty()
        .trim()
        .escape()
        .withMessage("A product must have a name"),
      body("price")
        .isNumeric()
        .withMessage("A product should be a number")
        .notEmpty()
        .withMessage("A product must have a price")
        .trim()
        .escape(),
      body("categoryId")
        .notEmpty()
        .withMessage("a category should be assigned to product")
        .trim()
        .escape(),
      body("sizes").optional().isJSON(),
      body("colors").optional().isJSON(),
    ];
  };
  static categoryValidator = () => {
    return [
      body("categoryName")
        .notEmpty()
        .trim()
        .escape()
        .withMessage("A category should have a name"),
    ];
  };
  static userValidator = () => {};
}

export default Validator;
