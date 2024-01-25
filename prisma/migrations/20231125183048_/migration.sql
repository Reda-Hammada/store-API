/*
  Warnings:

  - You are about to drop the column `category_name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `categoryName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "category_name",
ADD COLUMN     "categoryName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "product_name",
ADD COLUMN     "productName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;
