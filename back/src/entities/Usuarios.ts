import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credencial } from "./Credenciales"
import { Turno } from "./Turnos"


@Entity({name: "usuarios"})
export class Usuario {
   @PrimaryGeneratedColumn()
    id: number
    
    @Column({length:50})
    nombre:string

    @Column({length:50})
    apellido:string

    @Column({length:50})
    direccion: string

    @Column("integer")
    telefono: number

    @Column({length:50})
    email: string

    @Column("integer")
    dni: number

    @Column()
    urlFoto: string

    @OneToOne(()=> Credencial)
    @JoinColumn()
    credencial: Credencial

    @OneToMany(()=> Turno , (turno)=>turno.usuario)
    turnos: Turno[]
  
};