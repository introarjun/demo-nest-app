import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { EmployeeModule } from './employee/employee.module';
import { AccountModule } from './account/account.module';
import { BookModule } from './book/book.module';
import { LibraryModule } from './library/library.module';
import { ManyToManyModule } from './many-to-many/many-to-many.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    ProductsModule, StudentModule, CustomerModule, UsersModule, EmployeeModule, AccountModule, BookModule, LibraryModule, ManyToManyModule
  ],
  controllers: [AppController, DatabaseController],
  providers: [AppService, DatabaseService],
})
export class AppModule { }
