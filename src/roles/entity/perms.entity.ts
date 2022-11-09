import { Entity, Column,ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Roles } from './roles.entity';

@Entity()
export class Permissions {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    description: string;
    @ManyToOne(type => Roles, (role) => role.permissions)
    roles: Roles;
    
}