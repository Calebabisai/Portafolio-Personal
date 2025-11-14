

export const PERSONAL_LINKS = {

  // REDES SOCIALES Y PERFILES PROFESIONALES
  
  github: 'https://github.com/Calebabisai',         
  linkedin: 'https://www.linkedin.com/in/caleb-trevizo-a151831a3/',
  instagram: 'https://www.instagram.com/calebtrevizo/?next=%2F',  
  
  
  // INFORMACIÓN DE CONTACTO
  
  email: 'gelndcaleb@gmail.com',
  telefono: '+52-2299570625',
  whatsapp: 'https://wa.me/522299570625',  // Link directo a WhatsApp
  
  
  // PROYECTOS - DEMOS Y REPOSITORIOS
  
  projects: {
    // Proyecto: IrSolarDesigns
    project1: {
      demo: 'https://irsolardesigns.netlify.app/',      
      github: 'https://github.com/Calebabisai/IRSolarDesigns',  
    },
    // Proyecto 2: GeoPoint
    project2: {
      demo: 'https://play.google.com/store/apps/details?id=com.imaginetz.geopoint&hl=es_MX',     
      github: 'https://github.com/Calebabisai/GeoPoint', 
    },
    // Proyecto 3: Shopping List
    project3: {
      demo: 'https://tu-weather-demo.vercel.app',        
      github: 'https://github.com/Calebabisai/shopping-list-app',    
    },
  },
  

  // CURSOS Y CERTIFICACIONES DE UDEMY
  
 
  courses: [
    {
      title: 'Ingeniería de Software',
      instructor: 'Universidad Interamericana del Desarrollo',
      image: '/assets/courses/Unid-Curso.png', 
      certificateUrl: '#',
      period: '2021 - 2025'
    },
    {
      title: 'Angular Total',
      instructor: 'Federico Garay, Maximilian Schwarzmüller',
      image: '/assets/courses/Angular-curso.png',  
      certificateUrl: 'https://www.udemy.com/certificate/UC-a8291a0d-a572-401f-bc98-919173e69913/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      period: undefined
    },
    {
      title: 'TypeScript sin fronteras',
      instructor: 'Nicolas Schurmann',
      image: '/assets/courses/Typescript-curso.png', 
      certificateUrl: 'https://www.udemy.com/certificate/UC-5b6f62dd-cea8-4da8-a217-7204e3e4dfad/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      period: undefined
    },
  ],
} as const;
