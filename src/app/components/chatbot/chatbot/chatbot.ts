import { Component, inject, ViewChild, ElementRef, computed, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../../../services/chatbot.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot{
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  //Inyectar servicios
  readonly chatbotService = inject(ChatbotService);
  readonly languageService = inject(LanguageService);

  //Variable para guardar todo lo que escriba el usuario
  messageInput = '';
  // Variable para mostar/ocultar el chat
  isOpen = false;
  private observerInitialized = false;

  messages = computed(() => this.chatbotService.getMessages()());
  isLoading = computed (() => this.chatbotService.getIsLoading()());

   private initObserver(): void {
    if (this.observerInitialized) return;

    setTimeout(() => {
      const container = this.messagesContainer?.nativeElement;
      
      if (container) {
        console.log('Observando contenedor de mensajes...');
        
        const observer = new MutationObserver(() => {
          this.scrollBottom();
        });

        observer.observe(container, {
          childList: true,
          subtree: true,
          characterData: true
        });

        this.observerInitialized = true;
      }
    }, 100);
  }

  /**
   * Enviar mensaje
   */
  sendMessage(): void {
    if(this.messageInput.trim()) {
      //agrega mensaje del usuario al servicio
      this.chatbotService.addUserMessage(this.messageInput);

      //Simular respuesta del bot (Por ahora sin Gemini)
      setTimeout(() => {
        this.chatbotService.addBotMessage('Hola, por el momento me encuentro en desarrollo')
      },800);

      //Limpiar el input
      this.messageInput = '';
    }
  }

  /**
   * Abrir/cerrar el chat
   */
  toggleChat(): void {
    this.isOpen = !this.isOpen;

    if(this.isOpen) {
      this.initObserver();
      setTimeout(() => this.scrollBottom(), 100)
    }
  }

  /**
   * Limpiar el chat
   */
  clearChat(): void {
    this.chatbotService.clearMessages();
  }

  /**Desplazarse al final del chat */
  private scrollBottom(): void {
    const container = this.messagesContainer?.nativeElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
}











