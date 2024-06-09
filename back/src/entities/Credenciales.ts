import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Usuario } from "./Usuarios";

@Entity({name :"credenciales"})

export class Credencial {

    @PrimaryGeneratedColumn()
    id:number

    @Column({length:20})
    nameUser:string

    @Column({length:20})
    password:string

    @OneToOne(()=>Usuario , (usuario)=>usuario.credencial)
    user:Usuario

};


    