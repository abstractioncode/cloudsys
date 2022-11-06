import { Controller, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { ConfigService } from 'src/configs/configs.service';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
 constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private configService: ConfigService,
    ) {}

  async findOne(username: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: [{ username:username }] });
  }
  async FindConfigs(username: string): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],
    select: ["id","configs"],
    relations: ["configs"] });
    return user.configs
  }
  async GetConfig(username: string,configname: string): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],
    select: ["id","configs"],
    relations: ["configs"] });
    return user.configs.find(config => config.name === configname).content
  }
  async CreateConfig(username: string,config:any): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],   });
    return this.configService.CreateConfig(user.id,config)
  }
  async DeleteConfig(username: string,configname: string): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],   });
    return this.configService.DeleteConfig(user.id,configname)
  }
  async UpdateConfig(username: string,config:any): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],   });
    return this.configService.UpdateConfig(user.id,config)
  }
}