import { DataSource } from "typeorm"
import { Usuario } from "../entities/Usuarios"
import { Turno } from "../entities/Turnos"
import { Credencial } from "../entities/Credenciales"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Nic@1990",
    database: "hw_typeorm",
    synchronize: true,
    //dropSchema: true,
    logging: false,
    entities: [Usuario,Credencial,Turno],
    subscribers: [],
    migrations: [],
})


export const usuarioModelo = AppDataSource.getRepository(Usuario);
export const turnoModelo = AppDataSource.getRepository(Turno);
export const credencialModelo = AppDataSource.getRepository(Credencial);