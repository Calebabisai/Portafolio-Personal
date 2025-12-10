import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_LINKS } from '../../config/personal-links';
import { LanguageService } from '../../services/language.service';


/**
 * Componente de la sección de Proyectos y Cursos.
 * 
 * Muestra:
 * - Grid de proyectos destacados
 * - Cards con información de cada proyecto
 * - Tecnologías utilizadas (tags)
 * - Links a demo y código fuente
 * - Sección de cursos completados (Udemy)
 * 
 * @example
 * ```html
 * <app-projects></app-projects>
 * ```
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /**
   * Configuración de links personales
   * Importada desde el archivo de configuración central
   */
  protected readonly links = PERSONAL_LINKS;
  readonly languageService = inject(LanguageService);

  /**
   * Retorna la imagen del proyecto segun su ID
   */
  getProjectImage(projectId: string): string {
    const images: { [key: string]: string } = {
      'irsolardesigns': '/assets/projects/Irsolardesigns-pagina.png',
      'geopoint': '/assets/projects/GeoPoint-app.png',
      'catalogo-peliculas': '/assets/projects/catalogopeliculas.png',
      'shopping-list': '/assets/projects/Shoppinglist-app.png',
      'todo-list': '/assets/projects/todolist.png',
      'Zyphboard': '/assets/projects/projectZyphboard.png'
    };
    return images[projectId] || '/assets/projects/default.png';
  }

  /**
   * Retorna las tecnologias del proyecto
   */
  getProjectTechs(projectId: string): string[] {
    const techs: { [key: string]: string[] } = {
      'irsolardesigns': ['React', 'TypeScript', 'Tailwind'],
      'geopoint': ['Angular', 'TypeScript', 'Ionic'],
      'catalogo-peliculas': ['Angular', 'TypeScript', 'SCSS'],
      'shopping-list': ['Angular', 'TypeScript', 'Tailwind'],
      'todo-list': ['Angular', 'TypeScript', 'CSS'],
      'Zyphboard': ['Angular', 'TypeScript', 'Tailwind']
    };
    return techs[projectId] || [];
  }

  getTechColor(tech: string): string {
    const colors: { [key: string]: string } = {
      'React': 'px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm rounded-full',
      'Angular': 'px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm rounded-full',
      'Vue': 'px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full',
      'TypeScript': 'px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full',
      'Tailwind': 'px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full',
      'SCSS': 'px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full',
      'CSS': 'px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full',
      'Ionic': 'px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm rounded-full'
    };
    return colors[tech] || 'px-3 py-1 bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 text-sm rounded-full';
  }

  /**
   * Retorna el link del proyecto (demo o girhub)
   */
  getProjectLink(projectId: any, type: 'demo' | 'github'): string {
    const links = this.links.projects;

    switch (projectId) {
      case 'irsolardesigns':
        return type === 'demo' ? links.project1.demo : links.project1.github;
      case 'geopoint':
        return type === 'demo' ? links.project2.demo : links.project2.github;
      case 'catalogo-peliculas':
        return type === 'demo' ? links.project3.demo : links.project3.github;
      case 'shopping-list':
        return type === 'demo' ? links.project4.demo : links.project4.github;
      case 'todo-list':
        return type === 'demo' ? links.project5.demo : links.project5.github;
      case 'Zyphboard':
        return type === 'demo' ? links.project6.demo : links.project6.github;
      default:
        return '#';
    }
  }
}
