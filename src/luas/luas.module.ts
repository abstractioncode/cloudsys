import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Luas } from './entities/luas.entity';
import { LuasService } from './luas.service';

@Module({
    imports: [TypeOrmModule.forFeature([Luas])  ],
    providers: [LuasService],
    exports: [LuasService],
    controllers: [],
})
export class LuasModule {}