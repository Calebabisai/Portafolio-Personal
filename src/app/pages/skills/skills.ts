import { Component } from '@angular/core';

/**
 * Componente de la sección de Habilidades.
 * 
 * Características:
 * - Animación de cinta infinita con logos de tecnologías
 * - Hover effects en cada logo
 * - Pausado automático al pasar el mouse
 * - Lista completa del stack tecnológico
 * 
 * Tecnologías mostradas:
 * - Frontend: Angular, React, TypeScript, JavaScript
 * - Estilos: Tailwind CSS, HTML5, CSS3
 * - Control de versiones: Git, GitHub, Bitbucket
 * 
 * @remarks
 * La animación CSS está definida en skills.scss
 * Los logos se cargan desde CDN de devicons
 * 
 * @example
 * ```html
 * <app-skills></app-skills>
 * ```
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  // La animación infinita está manejada por CSS puro
  // Ver skills.scss para los @keyframes
}
