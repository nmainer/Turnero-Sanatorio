import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuarios";



@Entity({name: "turnos"})

export class Turno {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:10})
    dia: string

    @Column()
    hora:string

    @Column({length:20 , default: "pendiente"})
    estado:string

    @ManyToOne(()=> Usuario , (usuario)=>usuario.turnos)
    usuario:Usuario
}