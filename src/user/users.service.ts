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
  async FindLuas(username: string): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],
    select: ["id","Luas"],
    relations: ["Luas"] });
    console.log(user)
    return user.Luas
  }
  async Register(username: string,password: string): Promise< any> {
    const user = await this.usersRepository.findOne({ where: [{ username:username }],   });
    if(user){
      return false
    }
    const newUser = new Users()
    newUser.username = username
    newUser.password = password
    return this.usersRepository.save(newUser)
  }
  async checkUserPermission(name: string) {
    const user = await this.usersRepository.find({
        where: {
            id: 1,
        },
        select: ['role','id'],
        relations: ['role.permissions'],

    });
    let returnvalue : boolean = false;
    user.forEach((user) => {
        user.role.permissions.forEach((permission) => {
            if(permission.name == name) return returnvalue = true;
        })
    }
    );
    return returnvalue;
}
}