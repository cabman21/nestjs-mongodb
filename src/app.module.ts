import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import "dotenv/config";
import { CatsModule } from "./cats/cats.module";
import { InvoicesModule } from "./invoices/invoices.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CatsModule,
    InvoicesModule,
  ],
})
export class AppModule {}
