import { Component, inject, ViewChild, ElementRef, viewChild } from '@angular/core';
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

  constructor() {
    
  }
}
