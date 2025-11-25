

export const PERSONAL_LINKS = {

  // REDES SOCIALES Y PERFILES PROFESIONALES
  
  github: 'https://github.com/Calebabisai',         
  linkedin: 'https://www.linkedin.com/in/caleb-trevizo-a151831a3/',
  instagram: 'https://www.instagram.com/calebtrevizo/?next=%2F',  
  
  
  // INFORMACIÓN DE CONTACTO
  
  email: 'gelndcaleb@gmail.com',
  telefono: '+52-2299570625',
  whatsapp: 'https://wa.me/522299570625',  
  
  
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
    // Proyecto 3: Catalogo de Peliculas
    project3: {
      demo: 'https://catalogopeliculascaleb.netlify.app/',        
      github: 'https://github.com/Calebabisai/catalogo-peliculas',    
    },
    //Proyecto 4: Shopping List
    project4: {
      demo: 'https://shoppinglistcaleb.netlify.app/',        
      github: 'https://github.com/Calebabisai/shopping-list-app',    
    },
    //Proyecto 5: Todo list con usuarios
    project5: {
      demo: 'https://todolistappcaleb.netlify.app/',        
      github: 'https://github.com/Calebabisai/tareas-con-usuarios-app',    
    },
    //Proyecto 6: Dashboard interactivo
    project6: {
      demo: 'https://dashboardcaleb.netlify.app/',        
      github: 'https://github.com/Calebabisai/dashboard-test-curso',    
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
      period: '2025'
    },
    {
      title: 'TypeScript sin fronteras: Guia definitiva',
      instructor: 'Nicolas Schurmann',
      image: '/assets/courses/Typescript-curso.png', 
      certificateUrl: 'https://www.udemy.com/certificate/UC-5b6f62dd-cea8-4da8-a217-7204e3e4dfad/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
      period: '2025'
    },
    {
      title: 'Maximize Productivity With AI Tools',
      instructor: 'Google',
      image: '/assets/courses/googlecourseia.png', 
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/W6J37L68ORN2',
      period: '2025'
    },
  ],
} as const;
