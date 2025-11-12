import { Component, inject } from '@angular/core';
import { ThemeServices } from '../../services/theme-services';

@Component({
  selector: 'app-theme-toggle',
  standalone:true,
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  themeServices = inject(ThemeServices);

  onToggleTheme() {
    this.themeServices.toggleTheme();
  }
}
