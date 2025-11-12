import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Footer } from "./shared/footer/footer";
import { ThemeToggle } from './components/theme-toggle/theme-toggle';
import { Contact } from "./pages/contact/contact";
import { Skills } from "./pages/skills/skills";
import { Projects } from "./pages/projects/projects";
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, Contact, Skills, Projects, About, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portafolio-Personal');
}
