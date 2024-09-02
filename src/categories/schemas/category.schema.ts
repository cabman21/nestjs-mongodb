import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaOptions, SchemaTypes, Types } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

const options: SchemaOptions = {
  collection: "categories",
  id: true,
  _id: true,
  timestamps: false,
};

@Schema(options)
export class Category {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  type: string;

  @Prop()
  parentCategory: string;

  @Prop()
  description: string;

  @Prop()
  image?: string;

  @Prop()
  products?: number;
}

const _CategorySchema = SchemaFactory.createForClass(Category);

_CategorySchema.virtual("id").get(function () {
  return this._id.toHexString();
});
_CategorySchema.set("toJSON", { virtuals: true });

export const CategorySchema = _CategorySchema;
