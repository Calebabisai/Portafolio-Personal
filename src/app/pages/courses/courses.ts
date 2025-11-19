import { Component, Inject } from '@angular/core';
import { PERSONAL_LINKS } from '../../config/personal-links';
import { CommonModule } from '@angular/common';

/** Componente de Cursos y certificados
 * 
 * En este componente se muestran mis cursos, con sus imagenes, certificados
 * y un link respectivo para que puedan ver el certificado real. Cada tarjeta incluye:
 * nombre del Curso, nombre del instructor y su Periodo
 */
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  links = PERSONAL_LINKS
}
