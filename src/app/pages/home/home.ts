import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_LINKS } from '../../config/personal-links';
import { LanguageService } from '../../services/language.service';

/**
 * Componente de la página de inicio (Hero Section).
 * 
 * Muestra:
 * - Presentación personal con nombre y título
 * - Descripción breve de habilidades
 * - Botones de llamada a la acción (CTA)
 * - Avatar/foto profesional (placeholder)
 * - Elementos decorativos animados
 * 
 * @example
 * ```html
 * <app-home></app-home>
 * ```
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly links = PERSONAL_LINKS;

  /**
   * Inyetamos el servicio de idiomas
   */
  readonly languageService = inject(LanguageService);
}
