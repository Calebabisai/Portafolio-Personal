import { Component, inject } from '@angular/core';
import { PERSONAL_LINKS } from '../../config/personal-links';
import { LanguageService } from '../../services/language.service';

/**
 * Componente de pie de página (footer).
 * 
 * Incluye:
 * - Branding y descripción breve
 * - Navegación rápida a todas las secciones
 * - Links a redes sociales
 * - Información de contacto
 * - Copyright y mensaje personalizado
 * 
 * @remarks
 * El footer es responsive y se adapta a diferentes tamaños de pantalla.
 * Layout de 3 columnas en desktop, apilado en móvil.
 * 
 * @example
 * ```html
 * <app-footer></app-footer>
 * ```
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly languageService = inject(LanguageService);
  protected readonly links = PERSONAL_LINKS;
}
