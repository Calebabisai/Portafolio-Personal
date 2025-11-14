import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { PERSONAL_LINKS } from '../../config/personal-links';

/**
 * Componente de la sección de Contacto con integración de EmailJS.
 * 
 * Incluye:
 * - Formulario de contacto con validación reactiva
 * - Integración con EmailJS para envío de correos
 * - Links a redes sociales
 * - Estados de carga y mensajes de éxito/error
 * 
 * @example
 * ```html
 * <app-contact></app-contact>
 * ```
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  protected readonly links = PERSONAL_LINKS;
  
  // Estados del formulario
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // FormGroup con validaciones
  contactForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', [Validators.required, Validators.minLength(3)]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  
  private readonly EMAIL_CONFIG = {
    serviceId: 'service_y2i07pw',
    templateId: 'template_z1nsy2s',  
    publicKey: 'i1n96QZ-jTEncwtUZ'        
  };

  /**
   * Envía el formulario usando EmailJS
   */
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      const response = await emailjs.send(
        this.EMAIL_CONFIG.serviceId,
        this.EMAIL_CONFIG.templateId,
        {
          from_name: this.contactForm.value.nombre,
          from_email: this.contactForm.value.email,
          subject: this.contactForm.value.asunto,
          message: this.contactForm.value.mensaje,
          to_email: this.links.email
        },
        this.EMAIL_CONFIG.publicKey
      );

      console.log('✅ Email enviado:', response);
      this.submitSuccess = true;
      this.contactForm.reset();

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);

    } catch (error: any) {
      console.error('❌ Error al enviar email:', error);
      this.submitError = true;
      this.errorMessage = 'Error al enviar el mensaje. Por favor intenta nuevamente.';

      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  /**
   * Verifica si un campo tiene errores y ha sido tocado
   */
  hasError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  /**
   * Obtiene el mensaje de error para un campo específico
   */
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (field?.hasError('email')) {
      return 'Ingresa un email válido';
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    
    return '';
  }
}
