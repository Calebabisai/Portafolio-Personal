import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
  standalone: true
})
export class SanitizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Transforma HTML string en HTML seguro para Angular
   * @param html - String HTML a sanitizar
   * @returns HTML seguro para usar en [innerHTML]
   */
  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
