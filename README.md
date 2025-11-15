# Portafolio Personal

Portafolio web profesional desarrollado con Angular 20, diseñado para mostrar proyectos, habilidades y experiencia como desarrollador frontend.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Construcción](#construcción)
- [Deployment](#deployment)
- [Arquitectura](#arquitectura)
- [Componentes](#componentes)
- [Servicios](#servicios)
- [Configuración](#configuración)

## Características

- Diseño moderno y responsivo con Tailwind CSS
- Modo oscuro/claro con persistencia en localStorage
- Navegación suave entre secciones con scroll spy
- Formulario de contacto funcional con EmailJS
- Validación de formularios reactiva
- Animaciones CSS personalizadas
- Optimizado para SEO
- Deploy automatizado en Netlify

## Tecnologías

### Core
- **Angular 20.3.0** - Framework principal con arquitectura standalone
- **TypeScript 5.9.2** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva

### Estilos
- **Tailwind CSS 3.4.13** - Framework CSS utility-first
- **SCSS** - Preprocesador CSS
- **PostCSS 8.5.6** - Transformación de CSS
- **Autoprefixer 10.4.22** - Prefijos CSS automáticos

### Formularios y Email
- **Angular Forms** - Formularios reactivos
- **EmailJS 4.4.1** - Servicio de envío de emails

### Herramientas de Desarrollo
- **Angular CLI 20.3.4** - Herramienta de línea de comandos
- **Karma & Jasmine** - Testing
- **Angular CLI GH Pages** - Deployment a GitHub Pages

## Estructura del Proyecto

```
Portafolio-Personal/
├── public/
│   └── assets/
│       ├── courses/           # Imágenes de cursos y certificaciones
│       ├── projects/          # Capturas de pantalla de proyectos
│       └── CalebTrevizo.png   # Foto de perfil
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── theme-toggle/  # Componente de cambio de tema
│   │   ├── config/
│   │   │   └── personal-links.ts  # Configuración centralizada de enlaces
│   │   ├── pages/
│   │   │   ├── about/         # Página Sobre Mí
│   │   │   ├── contact/       # Página de Contacto con EmailJS
│   │   │   ├── courses/       # Sección de Cursos
│   │   │   ├── home/          # Página principal/Hero
│   │   │   ├── projects/      # Galería de Proyectos
│   │   │   └── skills/        # Habilidades técnicas
│   │   ├── services/
│   │   │   ├── scroll.service.ts      # Servicio de scroll suave
│   │   │   └── theme-services.ts      # Gestión de tema oscuro/claro
│   │   ├── shared/
│   │   │   ├── footer/        # Footer con redes sociales
│   │   │   └── navbar/        # Navegación con scroll spy
│   │   ├── app.config.ts      # Configuración de la aplicación
│   │   ├── app.routes.ts      # Definición de rutas
│   │   └── app.ts             # Componente raíz
│   ├── index.html             # HTML principal
│   ├── main.ts                # Punto de entrada
│   └── styles.scss            # Estilos globales
├── angular.json               # Configuración de Angular
├── tailwind.config.js         # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
├── netlify.toml               # Configuración de Netlify
└── package.json               # Dependencias y scripts
```

## Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Angular CLI

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/Calebabisai/Portafolio-Personal.git
cd Portafolio-Personal
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar EmailJS (opcional):
   - Crear cuenta en [EmailJS](https://www.emailjs.com/)
   - Obtener Service ID, Template ID y Public Key
   - Actualizar credenciales en `src/app/pages/contact/contact.ts`

## Desarrollo

Iniciar servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Modo de observación
```bash
npm run watch
```

## Construcción

### Producción
```bash
npm run build
```

Los archivos compilados se generarán en `dist/Portafolio-Personal/browser/`

### Development
```bash
ng build --configuration development
```

## Deployment

### Netlify (Actual)
El proyecto está configurado para deployment automático en Netlify:

```bash
git push origin main
```

Netlify detectará los cambios y desplegará automáticamente.

### GitHub Pages
Para desplegar en GitHub Pages:
```bash
npm run deploy
```

## Arquitectura

### Standalone Components
El proyecto utiliza la arquitectura standalone de Angular 20, eliminando la necesidad de NgModules.

### Signals
Gestión de estado reactivo mediante Angular Signals:
- `ThemeServices`: Signal para el tema actual
- Estado del formulario con flags reactivos

### Dependency Injection
Uso de la función `inject()` para inyección de dependencias en componentes standalone.

### Control Flow Moderno
Sintaxis moderna de Angular 17+ con directivas `@if`, `@for` y `@else`.

## Componentes

### Pages

#### Home
Hero section con presentación personal, foto de perfil y enlaces a redes sociales. Incluye animaciones glassmorphism.

#### About
Sección sobre mí con información personal, educación y soft skills. Diseño con cards animadas.

#### Projects
Galería de proyectos con:
- Descripción del proyecto
- Tecnologías utilizadas
- Enlaces a demo y repositorio GitHub
- Imágenes de captura de pantalla

#### Skills
Visualización de habilidades técnicas organizadas por categorías:
- Frontend
- Diseño y Herramientas
- Versionado y Colaboración

#### Courses
Sección de cursos y certificaciones con:
- Universidad (UNID - Ingeniería de Software)
- Cursos de Udemy con enlaces a certificados

#### Contact
Formulario de contacto funcional con:
- Validación reactiva (nombre, email, asunto, mensaje)
- Integración con EmailJS
- Estados de carga, éxito y error
- Enlaces a redes sociales

### Shared Components

#### Navbar
Barra de navegación sticky con:
- Scroll spy para resaltar sección activa
- Navegación suave entre secciones
- Toggle de tema oscuro/claro
- Sombra dinámica al hacer scroll

#### Footer
Footer con enlaces a redes sociales y derechos de autor.

#### Theme Toggle
Botón animado para cambiar entre modo oscuro y claro.

## Servicios

### ThemeServices
Gestiona el tema de la aplicación (oscuro/claro):
- Detecta preferencia del sistema
- Persiste selección en localStorage
- Expone Signal para estado reactivo
- Aplica clases CSS dinámicamente

```typescript
constructor() {
  this.initializeTheme();
}

toggleTheme(): void {
  this.isDarkMode.update(value => !value);
}
```

### ScrollService
Proporciona navegación suave entre secciones:
- Scroll animado con comportamiento smooth
- Ajuste de offset para navbar sticky
- Manejo de errores si el elemento no existe

```typescript
scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
```

## Configuración

### personal-links.ts
Archivo centralizado con toda la configuración de enlaces externos:

```typescript
export const PERSONAL_LINKS = {
  github: 'https://github.com/Calebabisai',
  linkedin: 'https://linkedin.com/in/...',
  instagram: 'https://instagram.com/...',
  whatsapp: 'https://wa.me/...',
  email: 'gelndcaleb@gmail.com',
  projects: {
    project1: { demo: '...', github: '...' },
    project2: { demo: '...', github: '...' }
  },
  courses: [...]
}
```

### Tailwind Configuration
Configuración de Tailwind con modo oscuro mediante selector:

```javascript
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{html,ts}'],
  theme: { extend: {} }
}
```

### Angular Configuration
Configuración optimizada para producción en `angular.json`:
- Output hashing para cache busting
- Budgets configurados (500kB warning, 1MB error)
- Optimización de estilos de componentes

## Testing

Ejecutar tests unitarios:
```bash
npm test
```

## Documentación del Código

Todo el código incluye documentación JSDoc completa:
- Descripción de componentes y servicios
- Parámetros de métodos
- Valores de retorno
- Ejemplos de uso

## Licencia

© 2025 Caleb Trevizo. Todos los derechos reservados.

## Contacto

- Email: gelndcaleb@gmail.com
- GitHub: [@Calebabisai](https://github.com/Calebabisai)
- LinkedIn: [Caleb Trevizo](https://linkedin.com/in/caleb-trevizo)

## Autor

**Caleb Trevizo**
Desarrollador Frontend especializado en Angular y React
