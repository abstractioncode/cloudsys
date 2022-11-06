import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UsersService } from './users.service';
@Controller('/user')
export class UserController {
  constructor(private userService: UsersService,
 ) {}
    @ApiBody({
        schema: {
            properties: {
                'username': { type: 'string' }
            }
        }
    })
    @Post("GetUser")
    async nothing(@Body() Body: any) {
        const {username} = Body;
        return await this.userService.findOne(username);
    }
    @ApiBody({
        schema: {
            properties: {
                'username': { type: 'string' }
            }
        }
     })
    @Post("GetAllConfigs")
    async getconfigs(@Body() Body: any) {
        const {username} = Body;
        return await this.userService.FindConfigs(username);
    }
    @ApiBody({
        schema: {
            properties: {
                'username': { type: 'string' },
                'name': { type: 'string' }
            }
        }
     })
    @Post("GetConfig") 
    async getconfig(@Body() Body: any) {
        const {username,name} = Body;
        return await this.userService.GetConfig(username,name);
    }
    @ApiBody({
        schema: {
            properties: {
                'username': { type: 'string' },
                'name': { type: 'string' },
                'content': { type: 'string' }
            }
        }
     })
    @Post("CreateConfig")
    async createconfig(@Body() Body: any) {
        const {username} = Body;
        const config = {
            name: Body.name,
            content: Body.content,
        }
        return await this.userService.CreateConfig(username,config);
    }
    @ApiBody({
        schema: {
            properties: {
                'username': { type: 'string' },
                'name': { type: 'string' }            
            }
        }
     })
    @Post("DeleteConfig")
    async deleteconfig(@Body() Body: any) {
        const {username,name} = Body;
        return await this.userService.DeleteConfig(username,name);
    }
    @ApiBody({
        schema: {
            properties: {
                'username': { type: 'string' },
                'name': { type: 'string' },
                'content': { type: 'string' }
            }
        }
     })
    @Post("UpdateConfig")
    async updateconfig(@Body() Body: any) {
        const {username} = Body;
        const config = {
            name: Body.name,
            content: Body.content,
        }
        return await this.userService.UpdateConfig(username,config);
    }
    @Post("GetAllLuas")
    async getlaus(@Body() Body: any) {
        const {username} = Body;
        console.log(username)
        return await this.userService.FindLuas(username);
    }
  
}