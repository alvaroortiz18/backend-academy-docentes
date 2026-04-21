import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('docente', { schema: 'docentes' })
export class Docente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 60 })
    nombres: string;

    @Column({ length: 60 })
    apellidos: string;

    @Column({ length: 40, nullable: true })
    email?: string;

    @Column({ type: 'text', nullable: true })
    direccion?: string;

    @Column({ length: 30, nullable: true })
    cedula?: string;

    @Column({ length: 10, nullable: true })
    telefono?: string;

    @Column()
    etnia_id: number;

    @Column()
    cargo_id: number;

    @Column()
    sexo_id: number;

    @Column({ type: 'timestamp', nullable: true })
    created_at?: Date;

    @Column({ type: 'timestamp', nullable: true })
    updated_at?: Date;
}
