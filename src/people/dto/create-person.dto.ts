import { Product } from "../schemas/product.schema";

export class CreatePersonDto {
  readonly id: string;
  readonly name: string;
  readonly userName: string;
  readonly avatar: string;
  readonly email: string;
  readonly dueDate: Date;
  readonly amount: number;
  readonly status: string;
  readonly createdAt: Date;
  readonly proejct: Product[];
}
