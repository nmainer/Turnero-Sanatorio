import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({name :"credenciales"})

export class Credencial {

    @PrimaryGeneratedColumn()
    id:number

    @Column({length:20})
    nombreUsuario:string

    @Column({length:20})
    contraseña:string

    @Column("integer")
    usuarioId: number
};