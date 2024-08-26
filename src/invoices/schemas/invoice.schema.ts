import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice {
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
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
