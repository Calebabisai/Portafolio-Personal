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
  readonly currentLanguage = signal<Language>('es')

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

  changeLanguage(language: Language): void {
    this.currentLanguage.set(language);
    localStorage.setItem('language', language);
  }

  getAllTranslations() {
    const lang = this.currentLanguage();
    return this.translations[lang];
  }
}
