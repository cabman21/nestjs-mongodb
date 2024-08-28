import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  products: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
