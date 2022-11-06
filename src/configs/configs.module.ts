import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from "./../user/users.module"
import { ConfigService } from './configs.service';
import { Configs } from './entities/configs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigControlller } from './configs.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Configs])  ],
    providers: [ConfigService],
    exports: [ConfigService],
    controllers: [ConfigControlller],
})
export class ConfigModule {}