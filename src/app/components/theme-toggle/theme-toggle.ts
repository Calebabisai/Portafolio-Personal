import { Component, inject } from '@angular/core';
import { ThemeServices } from '../../services/theme-services';

/**
 * Componente botón para alternar entre tema claro y oscuro.
 * 
 * Muestra un icono de sol (☀️) en modo claro y luna (🌙) en modo oscuro.
 * Al hacer click, alterna entre ambos temas usando el ThemeServices.
 * 
 * @example
 * ```html
 * <!-- En cualquier template: -->
 * <app-theme-toggle></app-theme-toggle>
 * ```
 */
@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  /**
   * Instancia del servicio de temas.
   * Inyectado usando la función inject() de Angular.
   * 
   * @public Accesible desde el template para leer el estado del tema
   */
  themeServices = inject(ThemeServices);

  /**
   * Alterna entre modo claro y modo oscuro.
   * 
   * Este método es llamado cuando el usuario hace click en el botón.
   * Delega la lógica al ThemeServices.
   * 
   * @example
   * ```html
   * <button (click)="onToggleTheme()">Cambiar tema</button>
   * ```
   * 
   * @returns void - No retorna ningún valor
   */
  onToggleTheme(): void {
    this.themeServices.toggleTheme();
  }
}
