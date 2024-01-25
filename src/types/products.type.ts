import { Prisma } from "@prisma/client";

export interface productsType {
  id: number;
  productName: string;
  price: number;
  categoryId: number;
  sizes: Prisma.JsonValue;
  Colors: Prisma.JsonValue;
}
