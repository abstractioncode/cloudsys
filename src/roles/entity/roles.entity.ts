import { Entity, Column,OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import {Permissions} from './perms.entity';
@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(type => Permissions, (permission) => permission.roles)
    permissions: Permissions[];
}