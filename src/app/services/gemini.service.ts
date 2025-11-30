/**
 * Servicio para interactuar con la API de Google Gemini.
 * Proporciona métodos para enviar mensajes y recibir respuestas generadas.
 */
import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';
import { CALEB_INFO } from '../data/caleb-info.ts';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  /**
   * Instancia de GoogleGenerativeAI
   */
  private genAI: GoogleGenerativeAI;
  /** Modelo generativo */
  private model: any;
  /** Chat en curso */
  private chat: any;

  constructor() {
    /**
     * Inicializa la API de Gemini con la clave proporcionada
     */
    const apiKey = environment.geminiApiKey;
    /**
     * Verifica si la clave de API esta configurada, si no, muestra una advertencia
     */
    if(!apiKey) {
      console.warn('NG_APP_GEMINI_KEY no configurada')
    }
    /**
     * Crea una instancia de GoogleGenerativeAI con la clave de API
     */
    this.genAI = new GoogleGenerativeAI(apiKey);
    /**
     * Selecciona el modelo generativo a utilizar (Gemini 2.0 Flash-Lite)
     */
    this.model = this.genAI.getGenerativeModel({model: 'gemini-2.0-flash-lite'});
    /** Inicializa el chat con el modelo seleccionado */
    this.initializeChat();
  }
  /**
   * Inicializa el chat con un prompt del sistema que define la personalidad
   * y conocimiento de Caleb. De aqui se basa el modelo para responder a las preguntas.
   */
  private initializeChat(): void {
    const systemPrompt = `Eres ${CALEB_INFO.nombre}, ${CALEB_INFO.titulo}.

  ${CALEB_INFO.resumen}

  SKILLS: ${CALEB_INFO.habilidades.lenguajes.join(', ')} | ${CALEB_INFO.habilidades.frontend.join(', ')} | ${CALEB_INFO.habilidades.ia.join(', ')}

  PROYECTOS: ${CALEB_INFO.proyectos.map(p => p.nombre).join(', ')} ${CALEB_INFO.proyectos.find(p => p.destacado) ? '(GeoPoint en Play Store)' : ''}

  EXPERIENCIA: ${CALEB_INFO.experiencia.map(e => `${e.puesto} en ${e.empresa}`).join(' | ')}

  FORMACIÓN: ${CALEB_INFO.cursos.map(c => c.nombre).join(', ')}

  CONTACTO: ${CALEB_INFO.contacto.email} | GitHub: ${CALEB_INFO.contacto.github}

  Instrucciones:
  - Responde natural y conversacional, como si fueras Caleb
  - Sin markdown excesivo (sin asteriscos, sin hashtags)
  - Sé conciso pero informativo
  - Si preguntan algo fuera de mis temas, redirige amablemente`;

    // Inicializar con el system prompt en el historial
    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: systemPrompt }],
        },
        {
          role: 'model',
          parts: [{ text: 'Entendido. Soy ' + CALEB_INFO.nombre + ' y responderé según mi información.' }],
        },
      ],
      generatingConfig: {
        maxOutputTokens: 100,
      }
    });
  }
  /**
   * Envía un mensaje del usuario a Gemini y obtiene la respuesta generada.
   * @param userMessage - Mensaje del usuario
   * @returns Respuesta generada por Gemini
   */
  async sendMessage(userMessage: string): Promise<string>{
    try {
      const result = await this.chat.sendMessage(userMessage);
      const response = await result.response;
      return response.text();

    }catch (error){
      console.error('Error en Gemini', error);
      return 'Lo siento, ocurrió un error. Intenta de nuevo.';
    }
  }
  /**
   * Reinicia el chat, limpiando el historial de mensajes
   * y volvemos a inicializar con el prompt del sistema.
   */
  clearChatHistory(): void {
    this.initializeChat();
  }
}
  

  

