import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  /**Signal con todos los mensajes 
   */
  private message = signal<Message[]>([]);
  /**Signal para mostrar el: Cargando... */
  private isLoading = signal(false);
  
}
