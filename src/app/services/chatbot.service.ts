import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  /**Signal con todos los mensajes 
   */
  private messages = signal<Message[]>([]);
  /**Signal para mostrar el: Cargando... */
  private isLoading = signal(false);

  constructor(){
    console.log('Chatbot Service Inicializado')
  }

  /**
   * Agregar un nuevo mensaje (del usuario)
   */
  addUserMessage(text: string) :void {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    //Actualiza el Signal con el nuevo mensaje
    this.messages.update(msgs => [...msgs, newMessage]);
    console.log('Mensaje del usuario:', text);
  }
  /**
   * Agrega un nuevo mensaje (del bot)
   */
  addBotMessage(text: string) : void {
    const newMessage: Message = {
      id: (Date.now() + 1).toString(),
      text:text,
      sender: 'bot',
      timestamp: new Date()
    };
    this.messages.update(msg => [...msg, newMessage]);
    console.log('Mensaje del Bot', text);
  }

  /**
   * Aqui obtenemos todos los mensajes para mostrarlo en el HTML
   */
  getMessages() {
    return this.messages;
  }
  /**
   * Obtener estado de carga 
   */
  getIsLoading() {
    return this.isLoading
  }

  setIsLoading(loading: boolean): void {
    this.isLoading.set(loading);
  }

  /**
   * Limpiar todos los mensajes
   */
  clearMessages() : void {
    this.messages.set([]);
    console.log('Chat limpiado')
  }
}
