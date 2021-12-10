import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TuVanCoPhieu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    direction: string;

    @Column('text')
    recommendation: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createddate: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' , onUpdate: 'NOW()' })
    updateddate: Date;
}