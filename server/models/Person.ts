import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Contract} from "./Contract";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}