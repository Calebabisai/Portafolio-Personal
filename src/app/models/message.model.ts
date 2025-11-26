export interface Message {
    id: string; //ID unico del mensaje
    text: string; //Contenido del mensaje
    sender: 'user' | 'bot'; //Quien envio el mensaje
    timestamp: Date; //Cuando se envio
}
