import app from '../src/server';  // Asegúrate de que app está exportado desde server.ts
import "reflect-metadata";  // Necesario para TypeORM
import { AppDataSource } from "../src/Config/data-source";
import { VercelRequest, VercelResponse } from '@vercel/node';  // Importa las interfaces de Vercel

// Cargar las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Conectar a la base de datos
let isConnected = false;

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    isConnected = true;
  })
  .catch((error) => {
    console.error('Error de conexión:', error);
  });

// Exporta la función para que Vercel la ejecute
export default (req: VercelRequest, res: VercelResponse) => {
  if (!isConnected) {
    return res.status(500).json({ message: 'Base de datos no conectada' });
  }
  app(req, res);  // Pasar la petición y respuesta a tu app de Express
};
