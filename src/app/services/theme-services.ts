import { Injectable, signal } from '@angular/core';

/**
 * Servicio para gestionar el tema (claro/oscuro) de la aplicación.
 * Utiliza Signals de Angular para reactividad automática.
 * Persiste la preferencia del usuario en localStorage.
 * 
 * @example
 * ```typescript
 * // En un componente:
 * themeService = inject(ThemeServices);
 * 
 * // Cambiar tema:
 * this.themeService.toggleTheme();
 * 
 * // Leer tema actual:
 * const isDark = this.themeService.Theme();
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeServices {
  /**
   * Signal que almacena el estado actual del tema.
   * - `true`: Modo oscuro (dark mode)
   * - `false`: Modo claro (light mode)
   * 
   * @readonly Se recomienda no modificar directamente, usar toggleTheme()
   */
  readonly Theme = signal<boolean>(true);

  /**
   * Constructor del servicio.
   * Inicializa el tema al cargar la aplicación.
   */
  constructor() {
    this.initializeTheme();
  }

  /**
   * Inicializa el tema de la aplicación.
   * 
   * Orden de prioridad:
   * 1. Lee el tema guardado en localStorage
   * 2. Si no existe, detecta las preferencias del sistema operativo
   * 3. Aplica el tema correspondiente
   * 
   * @private Este método se ejecuta automáticamente en el constructor
   */
  initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    this.Theme.set(isDark);
    this.applyTheme(isDark);
  }

  /**
   * Alterna entre modo claro y modo oscuro.
   * 
   * Invierte el valor actual del tema:
   * - Si está en dark mode → cambia a light mode
   * - Si está en light mode → cambia a dark mode
   * 
   * @example
   * ```typescript
   * // En el template:
   * <button (click)="themeService.toggleTheme()">Cambiar tema</button>
   * ```
   */
  toggleTheme(): void {
    this.Theme.update(isDark => !isDark);
    this.applyTheme(this.Theme());
  }

  /**
   * Aplica el tema seleccionado al documento HTML.
   * 
   * Realiza tres acciones:
   * 1. Agrega/quita la clase 'dark' en el elemento <html>
   * 2. Establece el atributo data-theme para Tailwind CSS
   * 3. Persiste la preferencia en localStorage
   * 
   * @param isDark - `true` para modo oscuro, `false` para modo claro
   * @private Método interno, no debe ser llamado directamente
   */
  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
}