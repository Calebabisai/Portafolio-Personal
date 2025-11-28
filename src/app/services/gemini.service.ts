import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment.prod';
import { CALEB_INFO } from '../data/caleb-info.ts';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private chat: any;

  constructor() {
    const apiKey = environment.geminiApiKey;

    if(!apiKey) {
      console.warn('NG_APP_GEMINI_KEY no configurada')
    }
    
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({model: 'gemini-2.5-flash'});
    this.initializeChat();
  }

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
        maxOutputTokens: 300,
      }
    });
  }

  async sendMessage(userMessage: string): Promise<string>{
    try {
      const result = await this.chat.sendMessage(userMessage);
      const response = await result.response;
      return response.text();

    } catch (error){
      console.error('Error en Gemini', error);
      return 'Lo siento, ocurrió un error. Intenta de nuevo.';
    }
  }

  clearChatHistory(): void {
    this.initializeChat();
  }
}
  

  

