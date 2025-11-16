import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interfaz para definir la estructura de una tecnología
 */
interface Technology {
  name: string;
  icon: string;
  colorFrom: string;
  colorTo: string;
}

/**
 * Componente de la sección de Habilidades.
 * 
 * Características:
 * - Animación de cinta infinita con logos de tecnologías
 * - Galería en grid con todas las tecnologías
 * - Hover effects en cada logo
 * - Pausado automático al pasar el mouse sobre el carrusel
 * - Lista completa del stack tecnológico
 * 
 * Tecnologías mostradas:
 * - Frontend: Angular, React, TypeScript, JavaScript
 * - Estilos: Tailwind CSS, HTML5, CSS3
 * - Control de versiones: Git, GitHub, Bitbucket
 * - Backend/Cloud: Firebase
 * - Mobile: Ionic
 * - Herramientas: VS Code, Slack
 * 
 * @remarks
 * La animación CSS está definida en skills.scss
 * Los logos se cargan desde CDN de devicons
 * 
 * @example
 * ```html
 * <app-skills></app-skills>
 * ```
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  
  /**
   * Array de tecnologías con sus respectivos iconos y colores
   */
  protected technologies: Technology[] = [
    { 
      name: 'Angular', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      colorFrom: 'red-500',
      colorTo: 'red-600'
    },
    { 
      name: 'TypeScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      colorFrom: 'blue-500',
      colorTo: 'blue-600'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      colorFrom: 'yellow-500',
      colorTo: 'yellow-600'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      colorFrom: 'cyan-500',
      colorTo: 'cyan-600'
    },
    { 
      name: 'Tailwind', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      colorFrom: 'cyan-500',
      colorTo: 'blue-600'
    },
    { 
      name: 'HTML5', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      colorFrom: 'orange-500',
      colorTo: 'orange-600'
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      colorFrom: 'blue-500',
      colorTo: 'blue-600'
    },
    { 
      name: 'SCSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      colorFrom: 'pink-500',
      colorTo: 'pink-600'
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      colorFrom: 'orange-500',
      colorTo: 'red-600'
    },
    { 
      name: 'npm', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      colorFrom: 'red-500',
      colorTo: 'red-700'
    },
    { 
      name: 'GitHub', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      colorFrom: 'gray-700',
      colorTo: 'gray-900'
    },
    { 
      name: 'Bitbucket', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
      colorFrom: 'blue-500',
      colorTo: 'blue-700'
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      colorFrom: 'yellow-500',
      colorTo: 'orange-600'
    },
    { 
      name: 'Ionic', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      colorFrom: 'blue-500',
      colorTo: 'purple-600'
    },
    { 
      name: 'VS Code', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      colorFrom: 'blue-500',
      colorTo: 'cyan-600'
    },
    { 
      name: 'Slack', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
      colorFrom: 'purple-500',
      colorTo: 'pink-600'
    }
  ];
}
