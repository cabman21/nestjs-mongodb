import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import "dotenv/config";
import { CatsModule } from "./cats/cats.module";
import { InvoicesModule } from "./invoices/invoices.module";
import { peopleModule } from "./people/people.module";
import { categoriesModule } from "./categories/categories.module";
import { AppLoggerMiddleware } from "./middleware/app.logger.middleware";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CatsModule,
    InvoicesModule,
    peopleModule,
    categoriesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes("*");
  }
}
