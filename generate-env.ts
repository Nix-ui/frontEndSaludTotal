// generate-env.js
const fs = require('fs');
const path = require('path');

// Contenido del archivo environment.ts
// Usamos process.env para acceder a las variables de entorno de Vercel.
// VERCEL_ENV es una variable de Vercel que indica el entorno (production, preview, development).
const envFileContent = `
export const environment = {
  production: ${process.env.VERCEL_ENV === 'production' ? 'true' : 'false'},
  API_BASE_URL: '${process.env.API_BASE_URL}',
  USERS_ENDPOINT: '${process.env.USERS_ENDPOINT}',
  LOGIN_ENDPOINT: '${process.env.LOGIN_ENDPOINT}',
  REGISTER_ENDPOINT: '${process.env.REGISTER_ENDPOINT}',
  LOGOUT_ENDPOINT: '${process.env.LOGOUT_ENDPOINT}',
  PROFILE_ENDPOINT: '${process.env.PROFILE_ENDPOINT}',
};
`;

// Ruta donde se creará el archivo environment.ts
// Asumiendo que tu archivo está en src/environments/environment.ts
const envFilePath = path.join(__dirname, 'src', 'environments', 'environment.ts');

// Escribir el contenido en el archivo
fs.writeFileSync(envFilePath, envFileContent.trim());
console.log(`✅ Archivo de entorno generado: ${envFilePath}`);