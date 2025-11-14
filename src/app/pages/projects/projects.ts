import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_LINKS } from '../../config/personal-links';

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
}
