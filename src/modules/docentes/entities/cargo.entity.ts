import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cargo', { schema: 'docentes' })
export class Cargo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    descripcion: string;
}
