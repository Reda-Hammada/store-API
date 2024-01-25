import { checkSchema, ValidationChain } from "express-validator";
class Validator {
  static productValidator = () => {
    return checkSchema({
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
  static categoryValidator = () => {
    return checkSchema({
      categoryName: {
        isEmpty: {
          negated: true,
          errorMessage: "A category must have a name",
        },
        escape: true,
      },
    });
  };
  static userValidator = () => {};
}

export default Validator;
