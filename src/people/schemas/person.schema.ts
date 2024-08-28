import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Product } from "./product.schema";

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  userName: string;

  @Prop()
  avatar: string;

  @Prop()
  email: string;

  @Prop()
  dueDate: Date;

  @Prop()
  amount: number;

  @Prop()
  status: string;

  @Prop()
  createdAt: Date;

  @Prop({ type: [{ type: Product, ref: "Product" }] })
  products: Product[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
