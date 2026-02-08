import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ProductsModule, StudentModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
