import app from '../src/server';  // Asegúrate de que app está exportado desde server.ts
import "reflect-metadata";  // Necesario para TypeORM
import { AppDataSource } from "../src/Config/data-source";
import { VercelRequest, VercelResponse } from '@vercel/node';  // Importa las interfaces de Vercel
import dotenv from 'dotenv';  // Para manejar las variables de entorno

// Carga las variables de entorno
dotenv.config();

// Inicializa la base de datos
let isConnected = false;

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
    isConnected = true;
  })
  .catch((error) => {
    console.error('Error de conexión:', error);
  });

// Obtiene el puerto desde las variables de entorno o usa 3000 como valor por defecto
const PORT = process.env.PORT || 3000;

// Exporta la aplicación como una función para que Vercel la ejecute
export default (req: VercelRequest, res: VercelResponse) => {
  // Verifica si la base de datos ya está conectada, si no, intenta conectar
  if (!isConnected) {
    return res.status(500).json({ message: 'Base de datos no conectada' });
  }

  // Llama al servidor Express para manejar la solicitud
  app(req, res);  // Pasa la solicitud y respuesta a tu aplicación Express
};








