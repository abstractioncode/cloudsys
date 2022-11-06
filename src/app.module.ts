import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './configs/configs.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'cloud',
    entities: [
      __dirname + '*/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
  }),
  ConfigModule,
  UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
