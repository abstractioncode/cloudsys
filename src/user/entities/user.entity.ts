import { Configs } from 'src/configs/entities/configs.entity';
import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    JoinTable,
    ManyToMany,
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
  }
