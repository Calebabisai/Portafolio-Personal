import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServices {
  /* Signal Theme que recibe solo valores boolean. 
  siganl<boolean>(true) = 'darkMode' 
  siganl<boolean>(false) = 'lightMode'*/
  Theme = signal<boolean>(true)
 /* Ejecuta initializeTheme() cuando la app carga */
  constructor() {
    this.initializeTheme();
  }
   /* Lee localStorage, detecta las preferencias del usuario (sistema), 
   define isDark(true/false) */
  initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.Theme.set(isDark);
    this.applyTheme(isDark);
  }
  /* Invierte isDark(True <=> False) */
  toggleTheme() {
    this.Theme.update(isDark => !isDark);

    this.applyTheme(this.Theme());

  }
  /* Condicion, donde si isDark es = TRUE, 
  se agregan las clases Dark y si no, quita el Dark y 
  agrega el atributo data-theme='light' */
  private applyTheme(isDark: boolean) {
    if(isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light')
    }
  }
}