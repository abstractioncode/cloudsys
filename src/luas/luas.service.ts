import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/user/users.service';
import { Repository } from 'typeorm';
import { Luas } from './entities/luas.entity'

@Injectable()
export class LuasService {
 constructor(

    @InjectRepository(Luas)
    private LuasRepository: Repository<Luas>,
    ) {}
    async CreateLua(id:number,cfg:any) {
        try {
            const lua = await this.LuasRepository.create({
                name: cfg.name,
                content: cfg.content,
                Owner: id,
            });
            await this.LuasRepository.save(lua);
            return lua;
        }
        catch (e) {
            return e;
        }
    }
    async DeleteLua(id:number,name:string) {
        try {
            const lua = await this.LuasRepository.findOne({ where: [{ name:name,Owner:id }] });
            await this.LuasRepository.delete(lua);
            return lua;
        }
        catch (e) {
            return e;
        }
    }
    async UpdateLua(id:number,luas:any) {
        try {
            const lua = await this.LuasRepository.findOne({ where: [{
                name: luas.name,Owner:id }] });
                lua.content = lua.content;
            await this.LuasRepository.save(lua);
            return lua;
        }
        catch (e) {
            return e;
        }
    }
 }