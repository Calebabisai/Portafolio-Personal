import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment.prod';
import { CALEB_INFO } from '../data/caleb-info.ts';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any
  private chat: any

  constructor() {
    //Inicializar Gemini con API KEY
    this.genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({model: 'gemini-2.5-flash'});
  }

  /**
   * Enviar mensajes a Gemini y obtener respuestas
   */
  async sendMessage(userMessage: string): Promise<string>{
  try {
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
  - Si preguntan algo fuera de mis temas, redirige amablemente. Por favor`;

    const chat = this.model.startChat({
      history: [],
      generatingConfig: {
        maxOutputTokens: 300,
      }
    });

    const result = await chat.sendMessage(systemPrompt + '\n\n' + userMessage);
    const response = await result.response;
    return response.text();

  }catch (error){
    console.error('Error en Gemini', error);
    return 'Lo siento, ocurrió un error. Intenta de nuevo.';
    }
  }
}

