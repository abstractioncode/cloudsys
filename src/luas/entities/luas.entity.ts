
import { Users } from 'src/user/entities/user.entity';
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
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
  } from 'typeorm';
@Entity()
export class Luas {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({
        type: "longtext",
    })
    content: string;
    @ManyToOne(type => Users, user => user.id)
    Owner: number;
}