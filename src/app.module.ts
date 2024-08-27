import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import "dotenv/config";
import { CatsModule } from "./cats/cats.module";
import { InvoicesModule } from "./invoices/invoices.module";
import { PersonsModule } from "./persons/persons.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CatsModule,
    InvoicesModule,
    PersonsModule,
  ],
})
export class AppModule {}
