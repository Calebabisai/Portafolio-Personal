import { Component, signal } from '@angular/core';
import { Navbar } from "./shared/navbar/navbar";
import { Footer } from "./shared/footer/footer";
import { Contact } from "./pages/contact/contact";
import { Courses } from './pages/courses/courses';
import { Skills } from "./pages/skills/skills";
import { Projects } from "./pages/projects/projects";
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";


/**
 * Componente raíz de la aplicación.
 * 
 * Estructura:
 * - Single Page Application (SPA)
 * - Navegación por scroll entre secciones
 * - Sin enrutamiento (router-outlet)
 * - Dark mode global
 * - Navbar fijo en la parte superior
 * 
 * Secciones incluidas:
 * - Home (Hero)
 * - About (Sobre mí)
 * - Projects (Proyectos)
 * - Skills (Habilidades)
 * - Contact (Contacto)
 * 
 * @example
 * ```html
 * <!-- En index.html: -->
 * <app-root></app-root>
 * ```
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    Home,
    About,
    Projects,
    Courses,
    Skills,
    Contact,
    
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  /**
   * Título de la aplicación.
   * Usado principalmente para metadatos y debugging.
   * 
   * @protected Accesible desde el template
   * @readonly No debe ser modificado después de la inicialización
   */
  protected readonly title = signal<string>('Portafolio-Personal');
}
