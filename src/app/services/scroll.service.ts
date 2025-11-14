import { Injectable } from '@angular/core';

/**
 * Servicio para gestionar la navegación suave (smooth scroll) entre secciones.
 * 
 * Permite desplazarse a cualquier sección de la página de forma fluida,
 * considerando la altura del navbar fijo para un posicionamiento preciso.
 * 
 * @example
 * ```typescript
 * // En un componente:
 * scrollService = inject(ScrollService);
 * 
 * // Desplazarse a una sección:
 * scrollToSection(sectionId: string) {
 *   this.scrollService.scrollToSection('about');
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  /**
   * Altura del navbar en píxeles.
   * Se usa para calcular el offset y que el contenido no quede oculto bajo el navbar.
   * 
   * @private
   * @constant
   */
  private readonly NAVBAR_HEIGHT = 80;

  /**
   * Desplaza la ventana suavemente a una sección específica de la página.
   * 
   * Calcula la posición exacta considerando:
   * - La posición actual del viewport
   * - La altura del navbar fijo
   * - El scroll actual de la página
   * 
   * @param sectionId - El ID del elemento HTML al que se desea navegar (sin el símbolo #)
   * 
   * @example
   * ```typescript
   * // HTML: <section id="projects">...</section>
   * 
   * // TypeScript:
   * this.scrollService.scrollToSection('projects');
   * ```
   * 
   * @returns void - No retorna ningún valor
   * 
   * @remarks
   * - Si el elemento no existe, el método no hace nada (fail-safe)
   * - La animación de scroll es manejada nativamente por el navegador
   * - El comportamiento 'smooth' puede no funcionar en navegadores antiguos
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    
    if (!element) {
      console.warn(`ScrollService: No se encontró el elemento con id "${sectionId}"`);
      return;
    }

    // Obtiene la posición del elemento relativa al viewport
    const elementPosition = element.getBoundingClientRect().top;
    
    // Calcula la posición final considerando el scroll actual y el navbar
    const offsetPosition = elementPosition + window.pageYOffset - this.NAVBAR_HEIGHT;

    // Ejecuta el scroll suave
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
