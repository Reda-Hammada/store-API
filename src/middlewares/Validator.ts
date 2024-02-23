import { body } from "express-validator";
import fs from "fs";
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
      body("images")
        .custom((value, { req }) => {
          const allowedExtensions = [
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/svg",
          ];
          if (
            req?.files?.some(
              (productImage: any) =>
                !allowedExtensions.includes(productImage.mimetype)
            )
          ) {
            // If any file fails validation, delete the stored files
            req.files.forEach((file: any) => {
              // Delete the file by its path
              const filePath = `src/uploads/images/${file.filename}`;
              // Use fs.unlinkSync to remove the file synchronously
            });
          }
        })
        .withMessage(
          "Image should be in one of the following formats: png, jpg, jpeg"
        ),
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
  static categoryValidator = () => {
    return [
      body("categoryName")
        .notEmpty()
        .trim()
        .escape()
        .withMessage("A category should have a name"),
    ];
  };
  static signInValidator = () => {
    return [
      body("email")
        .notEmpty()
        .trim()
        .isEmail()
        .withMessage("Please enter a valid email")
        .escape(),

      body("password")
        .notEmpty()
        .withMessage("Password should not be empty")
        .trim()
        .escape(),
    ];
  };

  static createUserValidator = () => {
    return [];
  };
}

export default Validator;
