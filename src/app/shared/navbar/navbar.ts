import { Component, inject, signal, HostListener, computed } from '@angular/core';
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { LanguageService} from '../../services/language.service';
import { Language } from '../../config/i18n.config';

/**
 * Interfaz para los elementos del menú de navegación.
 */
interface MenuItem {
  /** ID de la sección a la que apunta (debe coincidir con el id del HTML) */
  id: string;
  /** Texto que se muestra en el botón del navbar */
  label: string;
}

/**
 * Componente de barra de navegación principal.
 * 
 * Características:
 * - Posición fija (sticky) en la parte superior
 * - Detección automática de la sección visible (scroll spy)
 * - Navegación suave entre secciones
 * - Sombra dinámica al hacer scroll
 * - Indicador visual de la sección activa
 * - Integración con dark mode
 * 
 * @example
 * ```html
 * <app-navbar></app-navbar>
 * ```
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggle, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  /**
   * Servicio de scroll inyectado.
   * @private
   */
  private readonly scrollService = inject(ScrollService);
  /**
   * inyecta nuestro servicio de Lenguaje
   */
  readonly languageService = inject(LanguageService);

  /**
   * Signal que indica qué sección está actualmente visible.
   * Se actualiza automáticamente al hacer scroll.
   * 
   * @default 'home' - Inicia en la sección de inicio
   */
  readonly activeSection = signal<string>('home');

  /**
   * Signal que indica si el usuario ha scrolleado la página.
   * Se usa para mostrar/ocultar la sombra del navbar.
   * 
   * @default false - Sin scroll al inicio
   */
  readonly isScrolled = signal<boolean>(false);

  /**
   * Array de elementos del menú de navegación.
   * Define las secciones disponibles y sus labels.
   * 
   * @readonly
   */
    readonly menuItems = computed(() => {
    const translations = this.languageService.getAllTranslations();

    return [
      {id: 'home', label: translations.navbar.inicio},
      {id: 'about', label: translations.navbar.sobreMi},
      {id: 'projects', label: translations.navbar.proyectos},
      {id: 'courses', label: translations.navbar.cursos},
      {id: 'skills', label: translations.navbar.habilidades},
      {id: 'contact', label: translations.navbar.contacto},
    ]
  });

  changeLanguage(): void {
    const currentLang = this.languageService.currentLanguage();
    const newLang: Language = currentLang === 'es' ? 'en' : 'es';
    this.languageService.changeLanguage(newLang)
  }

  /**
   * Navega a una sección específica de la página.
   * 
   * Actualiza la sección activa y ejecuta el scroll suave.
   * 
   * @param sectionId - ID de la sección destino
   * 
   * @example
   * ```html
   * <button (click)="onNavClick('about')">Sobre mí</button>
   * ```
   */
  onNavClick(sectionId: string): void {
    this.activeSection.set(sectionId);
    this.scrollService.scrollToSection(sectionId);
  }

  /**
   * Listener que detecta el scroll de la ventana.
   * 
   * Ejecuta dos acciones:
   * 1. Actualiza el estado de `isScrolled` para mostrar/ocultar sombra
   * 2. Detecta qué sección está visible actualmente
   * 
   * @remarks
   * - Se ejecuta en cada evento de scroll
   * - Optimizado para no afectar el rendimiento
   * - Umbral de 20px para activar la sombra
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollThreshold = 20;
    this.isScrolled.set(window.pageYOffset > scrollThreshold);
    this.detectActiveSection();
  }

  /**
   * Detecta qué sección está visible en el viewport.
   * 
   * Algoritmo:
   * 1. Itera sobre todas las secciones definidas en `menuItems`
   * 2. Calcula la posición de cada sección relativa al viewport
   * 3. Marca como activa la primera sección que esté en la zona de detección
   * 
   * @private Método interno, no debe ser llamado directamente
   * 
   * @remarks
   * - Zona de detección: 150px desde la parte superior del viewport
   * - Solo la primera sección que coincida se marca como activa
   * - Si ninguna sección coincide, mantiene la última activa
   */
  private detectActiveSection(): void {
    const detectionThreshold = 150;
    const sections = this.menuItems().map(item => item.id);

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      
      if (!element) continue;

      const rect = element.getBoundingClientRect();

      // Verifica si la sección está en la zona de detección
      if (rect.top <= detectionThreshold && rect.bottom >= detectionThreshold) {
        this.activeSection.set(sectionId);
        break;
      }
    }
  }
}
