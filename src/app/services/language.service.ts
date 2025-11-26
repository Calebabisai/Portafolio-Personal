import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Language, translations } from '../config/i18n.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /*Signal que almacena el idioma actual
  Por defecto es espanol ('es')
  */
  readonly currentLanguage = signal<Language>(this.getInitialLanguage());
  

  /**
   * Objeto de tradcucciones
   */
  readonly translations = translations;

  constructor() {
    //carga idioma guardado en el localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      this.currentLanguage.set(savedLanguage);
    }
  }

  /**
   * Detecta el idioma del navegador
   * Si el navegador esta en ingles -> muestra en ingles
   * Si no -> muestra en español
   */

  private getInitialLanguage(): Language {
    // Primero se verifica si el usuario ya escogio el idioma
    const savedLanguage = localStorage.getItem('language') as Language;
    if(savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      return savedLanguage;
    }

    // Si no, se detecta el idioma del navegador
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === 'en') {
      return 'en';
    } else {
      return 'es';
    }
  }

  changeLanguage(language: Language): void {
    this.currentLanguage.set(language);
    localStorage.setItem('language', language);
  }

  getAllTranslations() {
    const lang = this.currentLanguage();
    return this.translations[lang];
  }
}
