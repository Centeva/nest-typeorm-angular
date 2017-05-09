import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    fileName: string;
    
    @Column()
    views: number;
}