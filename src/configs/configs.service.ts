import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/user/users.service';
import { Repository } from 'typeorm';
import { Configs } from './entities/configs.entity';

@Injectable()
export class ConfigService {
 constructor(

    @InjectRepository(Configs)
    private ConfigRepository: Repository<Configs>,
    ) {}
    async CreateConfig(id:number,cfg:any) {
        try {
            const config = await this.ConfigRepository.create({
                name: cfg.name,
                content: cfg.content,
                Owner: id,
            });
            await this.ConfigRepository.save(config);
            return config;
        }
        catch (e) {
            return e;
        }
    }
    async DeleteConfig(id:number,name:string) {
        try {
            const config = await this.ConfigRepository.findOne({ where: [{ name:name,Owner:id }] });
            await this.ConfigRepository.delete(config);
            return config;
        }
        catch (e) {
            return e;
        }
    }
    async UpdateConfig(id:number,cfg:any) {
        try {
            const config = await this.ConfigRepository.findOne({ where: [{
                name: cfg.name,Owner:id }] });
            config.content = cfg.content;
            await this.ConfigRepository.save(config);
            return config;
        }
        catch (e) {
            return e;
        }
    }
 }