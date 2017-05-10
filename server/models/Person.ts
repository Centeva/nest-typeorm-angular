import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}