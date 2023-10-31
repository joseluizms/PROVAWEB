
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column('float')
    price: number;

    @Column('int')
    quantity: number;
}
