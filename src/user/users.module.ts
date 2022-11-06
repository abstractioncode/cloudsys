import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/configs/configs.module';
import { ConfigService } from 'src/configs/configs.service';
import { Users } from './entities/user.entity';
import { UserController } from './user.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([Users]),ConfigModule],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UserController],
})
export class UsersModule {}