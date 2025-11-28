const fs = require('fs');
const path = require('path');

const envFile = path.join(__dirname, 'src/environments/environment.prod.ts');

let content = fs.readFileSync(envFile, 'utf8');

// Reemplaza el placeholder con la variable de entorno de Netlify
content = content.replace(
  'NETLIFY_GEMINI_KEY_PLACEHOLDER',
  process.env.NG_APP_GEMINI_KEY || ''
);

fs.writeFileSync(envFile, content);

console.log('Environment variables set successfully');