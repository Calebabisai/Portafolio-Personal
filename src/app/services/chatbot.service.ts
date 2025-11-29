/**
 * Servicio para manejar la lógica del chatbot,
 * incluyendo el almacenamiento de mensajes y la interacción con GeminiService.
 * Proporciona métodos para agregar mensajes del usuario y del bot,
 * así como para obtener el historial de mensajes.
 */

import { inject, Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Message } from '../models/message.model';
import { GeminiService } from './gemini.service';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  /**Signal con todos los mensajes 
   */
  private messages = signal<Message[]>([]);
  /**Signal para mostrar el: Cargando... */
  private isLoading = signal(false);
  /**
   * inyecto a geminiceService para utilizarse
   */
  private geminiService = inject(GeminiService);

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
    //Obtenemos la respuesta de Gemini
    this.getGeminiResponse(text);
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
   * Obtener respuestas de Gemini
   */
  private async getGeminiResponse(userMessage: string): Promise<void> {
    this.isLoading.set(true);

    try{
      const botResponse = await this.geminiService.sendMessage(userMessage);
      this.addBotMessage(botResponse);
    }catch(error){
      console.error('Error', error);
      this.addBotMessage('Disculpa, hubo un error al procesar tu pregunta')
    }finally {
      this.isLoading.set(false)
    }
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
