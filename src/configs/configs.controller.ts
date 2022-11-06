import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from './configs.service';
@Controller('/configs')
export class ConfigControlller {
  constructor(private CfgService: ConfigService,
 ) {}

}