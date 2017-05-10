import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from "typeorm";
import { Person } from "./Person";

@Entity()
export class Contract {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    dateCreated: Date;

    @ManyToMany(type => Person, person => person.contracts)
    @JoinTable()
    people: Person[] = [];
}