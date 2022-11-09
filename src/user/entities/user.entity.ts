import { Configs } from 'src/configs/entities/configs.entity';
import { Luas } from 'src/luas/entities/luas.entity';
import { Roles } from 'src/roles/entity/roles.entity';
import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
  } from 'typeorm';
  @Entity()
  export class Users {
    @PrimaryColumn({
        type: "int",
        generated: true,
        nullable: false
    })
    id: number;
    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    username: string;
    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    password: string;
    @OneToMany(type => Configs, configs => configs.Owner)
    configs: Configs[];
    
    @OneToMany(type => Luas, Lua => Lua.Owner)
    Luas: Luas[];
    
    @ManyToOne(type => Roles, (role) => role.id)
    role: Roles;
  }
