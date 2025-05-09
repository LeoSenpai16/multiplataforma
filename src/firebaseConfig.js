import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBBtAc8Cdb2CUKYeevx03A0gU6qMbQsdkE",
  authDomain: "pruebapresentacion-5c728.firebaseapp.com",
  databaseURL: "https://pruebapresentacion-5c728-default-rtdb.firebaseio.com",
  projectId: "pruebapresentacion-5c728",
  storageBucket: "pruebapresentacion-5c728.firebasestorage.app",
  messagingSenderId: "476081527439",
  appId: "1:476081527439:web:cca35d906ceff74c73eefa",
  measurementId: "G-MY2WWH9W62"
  
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la referencia a la base de datos
export const db = getDatabase(app);

// Opcional: Verificar inicialización
console.log("Firebase inicializado correctamente:", app.name);
