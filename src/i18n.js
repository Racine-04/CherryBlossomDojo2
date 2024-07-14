// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Cherry Blossom Dojo",
      subheading: "Unleash Your Inner Warrior: Master Martial Arts from the Comfort of Your Home!",
      findOutMore: "Find out More",
      aboutUs: "About Us",
      aboutText: [
        "Welcome to Cherry Blossom Dojo! Immerse yourself in the world of martial arts from the comfort of your home. Our mission is to bring the discipline, strength, and serenity of martial arts to everyone, no matter where you are.",
        "Our expert instructors deliver top-notch tutorials tailored for all levels, from beginners to advanced practitioners. Join us to boost your physical fitness, sharpen your mental clarity, and elevate your overall well-being through the powerful art of martial arts.",
        "At Cherry Blossom Dojo, martial arts is more than just a workout—it's a way of life. Our programs are crafted to enhance your physical abilities, cultivate mental discipline, and nurture spiritual growth. Whether you're eager to learn self-defense techniques, improve your fitness, or find a path to inner peace, our dojo has something for everyone.",
        "We are dedicated to creating a supportive and inclusive community where everyone can flourish. Become a part of our family and embark on a transformative journey of self-discovery and empowerment. At Cherry Blossom Dojo, you're not just joining a dojo; you're joining a family."
      ],      
      tutorials: "Tutorials",
      tutorialsVideo: "Tutorials Video",
      videoWelcome: "Welcome to our Tutorials Video page! Dive into a vast collection of martial arts tutorials tailored for every skill level, from beginner to advanced. Explore expertly curated videos across various martial arts disciplines, including Karate, Muay Thai, Brazilian Jiu Jitsu, Taekwondo, Boxing, and essential self-defense techniques like Blocking, Striking, Dodging, and Sweeps. Whether you're looking to refine your skills, master new techniques, or discover powerful self-defense strategies, our tutorials are designed to help you reach your goals. Use the filters on the left to customize your search by martial art type, skill level, video duration, and upload date. Happy training and enjoy your journey to mastery!",      filters: "Filters",
      martialArts: "Martial Arts",
      selfDefense: "Self-Defense Technique",
      level: "Level",
      time: "Time",
      date: "Date",
      clearFilters: "Clear Filters",
      karate: "Karate",
      muayThai: "Muay Thai",
      brazilianJiuJitsu: "Brazilian Jiu Jitsu",
      taekwondo: "Taekwondo",
      boxing: "Boxing",
      blocking: "Blocking",
      striking: "Striking",
      dodging: "Dodging",
      sweeps: "Sweeps",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      under10Minutes: "Under 10 minutes",
      tenTo20Minutes: "10-20 minutes",
      over20Minutes: "Over 20 minutes",
      oneWeekAgo: "1 week ago",
      twoWeeksAgo: "2 weeks ago",
      oneMonthAgo: "1 month ago",
      sixMonthsAgo: "6 months ago",
      // Navbar translations
      home: "Home",
      about: "About",
      contact: "Contact",
      planLiveSession: "Plan a Live Session",
      logIn: "Log In",
      signUp: "Sign Up",
      // Footer translations
      contactUs: "Contact Us",
      help: "Help",
      privacyPolicy: "Privacy Policy",
      disclaimer: "Disclaimer",
      socialMedia: "Social Media",
      language: "Language",
      // Signup translations
      createAccount: "Create an account",
      enterEmail: "Enter your email address",
      provideInfo: "Provide your basic info",
      createPassword: "Create your password",
      email: "Email",
      emailPlaceholder: "Enter your email address",
      name: "Name",
      namePlaceholder: "What's your name?",
      address: "Address",
      addressPlaceholder: "What's your address?",
      goal: "Goal",
      goalPlaceholder: "What's your personal goal with our platform?",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      confirmPassword: "Confirm Password",
      confirmPasswordPlaceholder: "Confirm your password",
      next: "Next",
      previous: "Previous",
      submit: "Submit",
      alreadyHaveAccount: "Already have an account?",
      logInHere: "Log in",
      signUpWithFacebook: "Sign up with Facebook",
      signUpWithGoogle: "Sign up with Google",
      // Login translations
      logInTitle: "Log in",
      emailOrUsername: "Email address",
      emailOrUsernamePlaceholder: "Enter your email",
      rememberMe: "Remember me",
      forgetPassword: "Forget your password?",
      noAccount: "Don't have an account?",
      signUpHere: "Sign up",
      // Errors
      emailRequired: "Email is required",
      nameRequired: "Name is required",
      addressRequired: "Address is required",
      goalRequired: "Goal is required",
      passwordRequired: "Password is required",
      passwordsDoNotMatch: "Passwords do not match",
      fillOutAllFields: "Please fill out all fields",
      // Booking
      bookSession: "Plan a Live Session with a Sensei",
      selectSensei: "Select a Sensei",
      selectDate: "Select a Date",
      selectTime: "Select a Time",
      bookNow: "Book Now",
      // Initial Videos
      initialVideos: [
        {
          id: 1,
          title: 'Advanced BJJ Moves for MMA: Triangle Choke Tutorial',
          type: 'Brazilian Jiu Jitsu',
          level: 'Advanced',
          time: '10-20 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/5UrATWw9ajQ?si=y_aVi2feJG426BUe',
          views: '50 views',
        },
        {
          id: 2,
          title: 'Mastering Striking Techniques: Lessons from McGregor vs Poirier',
          type: 'Boxing',
          level: 'Intermediate',
          time: '10-20 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/LTcnTC4EFYI?si=HNRUviuy6h6s6xE9',
          views: '10K views',
        },
        {
          id: 3,
          title: 'Karate Basics for Beginners: Kihon Techniques',
          type: 'Karate',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '1 week ago',
          url: 'https://youtu.be/mwE4idADxuM?si=QCEwZvYdxRV1jVB-',
          views: '1.2K views',
        },
        {
          id: 4,
          title: 'Muay Thai Advanced Combinations',
          type: 'Muay Thai',
          level: 'Advanced',
          time: 'Under 10 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/tZzWgs2UQrE?si=0ID4j2eIb0BAVpqm',
          views: '8K views',
        },
        {
          id: 5,
          title: 'Taekwondo Kicks: Mastering the Roundhouse Kick',
          type: 'Taekwondo',
          level: 'Intermediate',
          time: '10-20 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/gKCcOv70CAw?si=-aPWgbFG5zsE6GNU',
          views: '5K views',
        },
        {
          id: 6,
          title: 'Basic Blocking Techniques for Self-Defense',
          type: 'Blocking',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '1 week ago',
          url: 'https://youtu.be/x4LzZ3BxP7k?si=A1JScl75xMZGptb7',
          views: '800 views',
        },
        {
          id: 7,
          title: 'Effective Striking: Boxing and Kickboxing Drills',
          type: 'Striking',
          level: 'Advanced',
          time: 'Over 20 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/bs7X3F-XYTc?si=2bw44qj5KEtO-O6K',
          views: '15K views',
        },
        {
          id: 8,
          title: 'Dodging and Weaving: Essential Techniques for Fighters',
          type: 'Dodging',
          level: 'Intermediate',
          time: 'Under 10 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/ABqs5V4q4S8?si=XFzNaRRltbOdNDn3',
          views: '7K views',
        },
        {
          id: 9,
          title: 'Sweeps and Throws: Judo for MMA',
          type: 'Sweeps',
          level: 'Advanced',
          time: 'Over 20 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/_Zi5spppIxY?si=ohAAy4mKkezvUnKd',
          views: '20K views',
        },
        {
          id: 10,
          title: 'Boxing Footwork Drills for Beginners',
          type: 'Boxing',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/v0y86288Wt0?si=ScPGtodFGYMyPS-1',
          views: '3K views',
        },
        {
          id: 11,
          title: 'Muay Thai Clinch Techniques for Intermediate Fighters',
          type: 'Muay Thai',
          level: 'Intermediate',
          time: '10-20 minutes',
          date: '1 week ago',
          url: 'https://youtu.be/SD2PvP-jVds?si=JS-Ft95bmcfwLIu5',
          views: '10K views',
        },
        {
          id: 12,
          title: 'Karate Advanced Kata: Gojushiho Sho',
          type: 'Karate',
          level: 'Advanced',
          time: 'Over 20 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/39p6Py3xTWA?si=HGEQPQqDWVgQfrGF',
          views: '25K views',
        },
        {
          id: 13,
          title: 'Brazilian Jiu Jitsu Guard Pass Drills',
          type: 'Brazilian Jiu Jitsu',
          level: 'Intermediate',
          time: '10-20 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/ToVa7_I2ps4?si=NGq09DcWU3GReu45',
          views: '9K views',
        },
        {
          id: 14,
          title: 'Taekwondo Sparring Tips for Beginners',
          type: 'Taekwondo',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/JrmHkZRWXvo?si=c8KLTrwI913w7qnO',
          views: '2K views',
        },
        {
          id: 15,
          title: 'Advanced Blocking Techniques for MMA',
          type: 'Blocking',
          level: 'Advanced',
          time: '10-20 minutes',
          date: '1 week ago',
          url: 'https://youtu.be/jq7yqox1D5w?si=fmNY2VXpExpIp9u2',
          views: '11K views',
        },
        {
          id: 16,
          title: 'Striking Combinations: Muay Thai and Boxing',
          type: 'Striking',
          level: 'Intermediate',
          time: 'Over 20 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/nxKukVoomL0?si=O1D6KtS9NeyT_eFF',
          views: '6K views',
        },
        {
          id: 17,
          title: 'Effective Dodging Techniques for Self-Defense',
          type: 'Dodging',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/ooMjhFToGQw?si=q6852p3iMzKrdZV_',
          views: '900 views',
        },
        {
          id: 18,
          title: 'Judo Sweeps: Mastering Ashi Barai',
          type: 'Sweeps',
          level: 'Intermediate',
          time: '10-20 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/igBN0Ef-FNE?si=8pHKhx8Vt4VLdERM',
          views: '4K views',
        },
        {
          id: 19,
          title: 'Boxing Advanced Combinations for Fighters',
          type: 'Boxing',
          level: 'Advanced',
          time: '10-20 minutes',
          date: '1 week ago',
          url: 'https://youtu.be/3ttZm7A_5ak?si=ANYVHiSPPq5m3bfl',
          views: '12K views',
        },
        {
          id: 20,
          title: 'Muay Thai Kick Drills for Power and Speed',
          type: 'Muay Thai',
          level: 'Advanced',
          time: 'Over 20 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/pOL06akWQkc?si=wGnRcGsxiAvb8V4n',
          views: '22K views',
        },
        {
          id: 21,
          title: 'Karate Sparring Techniques for Intermediate Practitioners',
          type: 'Karate',
          level: 'Intermediate',
          time: 'Under 10 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/Hk__nFdfvMQ?si=Xs8d1eQfsXP8NYIv',
          views: '9K views',
        },
        {
          id: 22,
          title: 'Brazilian Jiu Jitsu Submission Escapes',
          type: 'Brazilian Jiu Jitsu',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '1 week ago',
          url: 'https://youtu.be/09WKJb8adxw?si=tx7kPmoCvvfGitj4',
          views: '5K views',
        },
        {
          id: 23,
          title: 'Taekwondo Advanced Sparring Combinations',
          type: 'Taekwondo',
          level: 'Advanced',
          time: 'Over 20 minutes',
          date: '1 month ago',
          url: 'https://www.youtube.com/live/HHNd-CCpAyQ?si=2cWYkTiyVMI-Y44-',
          views: '18K views',
        },
        {
          id: 24,
          title: 'Blocking Techniques for Street Self-Defense',
          type: 'Blocking',
          level: 'Intermediate',
          time: 'Under 10 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/LN8xKzjL_zk?si=fM7b49zh1TTp21EA',
          views: '7K views',
        },
        {
          id: 25,
          title: 'Striking Drills for MMA Fighters',
          type: 'Striking',
          level: 'Advanced',
          time: '10-20 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/Q3mqj0S-ECY?si=YhCgZOWSNo__sFRU',
          views: '14K views',
        },
        {
          id: 26,
          title: 'Dodging Techniques for Boxing',
          type: 'Dodging',
          level: 'Intermediate',
          time: 'Under 10 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/mktvu90FZHo?si=ndxKWkb23lRCNdR8',
          views: '6K views',
        },
        {
          id: 27,
          title: 'Boxing Fundamentals for Beginners',
          type: 'Boxing',
          level: 'Beginner',
          time: 'Under 10 minutes',
          date: '6 months ago',
          url: 'https://youtu.be/kKDHdsVN0b8?si=AqFtpi3GaVWXnNZB',
          views: '4K views',
        },
        {
          id: 28,
          title: 'Muay Thai Clinch Work for Advanced Fighters',
          type: 'Muay Thai',
          level: 'Advanced',
          time: 'Over 20 minutes',
          date: '2 weeks ago',
          url: 'https://youtu.be/Ng1Zh3OUo3w?si=_4bjDw-P9w0bR4NN',
          views: '17K views',
        },
        {
          id: 29,
          title: 'Karate Kata for Intermediate Students',
          type: 'Karate',
          level: 'Intermediate',
          time: 'Under 10 minutes',
          date: '1 month ago',
          url: 'https://youtu.be/5uAxkiBh0JI?si=rVeBgNrGYXE1Y2kZ',
          views: '8K views',
        }
      ],
    },
  },
  es: {
    translation: {
      title: "Dojo de Flor de Cerezo",
      subheading: "Desata tu Guerrero Interior: ¡Domina las Artes Marciales desde la Comodidad de tu Hogar!",
      findOutMore: "Descubrir Más",
      aboutUs: "Sobre Nosotros",
      aboutText: [
        "¡Bienvenido al Dojo de Flor de Cerezo! Ofrecemos una combinación única de entrenamiento en artes marciales que puedes disfrutar desde la comodidad de tu hogar. Nuestra misión es llevar la disciplina, la fuerza y la serenidad de las artes marciales a todos, sin importar su ubicación.",
        "Nuestros instructores experimentados ofrecen tutoriales de alta calidad que se adaptan a todos los niveles, desde principiantes hasta practicantes avanzados. Únete a nosotros para mejorar tu forma física, claridad mental y bienestar general a través del arte de las artes marciales.",
        "En el Dojo de Flor de Cerezo, creemos que las artes marciales son más que una actividad física; es un estilo de vida. Nuestros programas están diseñados no solo para mejorar tus habilidades físicas, sino también para fomentar la disciplina mental y el crecimiento espiritual. Ya sea que estés buscando aprender técnicas de defensa personal, mejorar tu forma física o encontrar un camino hacia la paz interior, nuestro dojo ofrece algo para todos.",
        "Estamos comprometidos a proporcionar un entorno de apoyo e inclusión donde todos puedan prosperar. Únete a nuestra comunidad y emprende un viaje de autodescubrimiento, empoderamiento y transformación. En el Dojo de Flor de Cerezo, somos más que un dojo; somos una familia."
      ],
      tutorials: "Tutoriales",
      tutorialsVideo: "Video de Tutoriales",
      videoWelcome: "¡Bienvenido a nuestra página de Videos de Tutoriales! Aquí encontrarás una amplia gama de tutoriales de artes marciales que se adaptan a todos los niveles de habilidad, desde principiantes hasta avanzados. Nuestros videos cuidadosamente seleccionados cubren varias disciplinas de artes marciales, incluyendo Karate, Muay Thai, Brazilian Jiu Jitsu, Taekwondo, Boxeo y técnicas de defensa personal como Bloqueo, Golpeo, Esquiva y Barridos. Ya sea que busques mejorar tus habilidades, aprender nuevas técnicas o encontrar estrategias efectivas de defensa personal, nuestros tutoriales están diseñados para ayudarte a alcanzar tus objetivos. Usa los filtros a la izquierda para limitar tu búsqueda por tipo de arte marcial, nivel de habilidad, duración del video y fecha de carga. ¡Feliz entrenamiento!",
      filters: "Filtros",
      martialArts: "Artes Marciales",
      selfDefense: "Técnica de Defensa Personal",
      level: "Nivel",
      time: "Tiempo",
      date: "Fecha",
      clearFilters: "Limpiar Filtros",
      karate: "Karate",
      muayThai: "Muay Thai",
      brazilianJiuJitsu: "Brazilian Jiu Jitsu",
      taekwondo: "Taekwondo",
      boxing: "Boxeo",
      blocking: "Bloqueo",
      striking: "Golpeo",
      dodging: "Esquiva",
      sweeps: "Barridos",
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
      under10Minutes: "Menos de 10 minutos",
      tenTo20Minutes: "10-20 minutos",
      over20Minutes: "Más de 20 minutos",
      oneWeekAgo: "hace 1 semana",
      twoWeeksAgo: "hace 2 semanas",
      oneMonthAgo: "hace 1 mes",
      sixMonthsAgo: "hace 6 meses",
      // Navbar translations
      home: "Inicio",
      about: "Sobre Nosotros",
      contact: "Contacto",
      planLiveSession: "Planificar una Sesión en Vivo",
      logIn: "Iniciar Sesión",
      signUp: "Registrarse",
      // Footer translations
      contactUs: "Contáctenos",
      help: "Ayuda",
      privacyPolicy: "Política de Privacidad",
      disclaimer: "Aviso Legal",
      socialMedia: "Redes Sociales",
      language: "Idioma",
      // Signup translations
      createAccount: "Crear una cuenta",
      enterEmail: "Introduce tu dirección de correo electrónico",
      provideInfo: "Proporcione su información básica",
      createPassword: "Crea tu contraseña",
      email: "Correo electrónico",
      emailPlaceholder: "Introduce tu dirección de correo electrónico",
      name: "Nombre",
      namePlaceholder: "¿Cuál es tu nombre?",
      address: "Dirección",
      addressPlaceholder: "¿Cuál es tu dirección?",
      goal: "Meta",
      goalPlaceholder: "¿Cuál es tu objetivo personal con nuestra plataforma?",
      password: "Contraseña",
      passwordPlaceholder: "Introduce tu contraseña",
      confirmPassword: "Confirmar contraseña",
      confirmPasswordPlaceholder: "Confirma tu contraseña",
      next: "Siguiente",
      previous: "Anterior",
      submit: "Enviar",
      alreadyHaveAccount: "¿Ya tienes una cuenta?",
      logInHere: "Iniciar sesión",
      signUpWithFacebook: "Regístrate en Facebook",
      signUpWithGoogle: "Regístrate con Google",
      // Login translations
      logInTitle: "Iniciar sesión",
      emailOrUsername: "Correo electrónico",
      emailOrUsernamePlaceholder: "Introduce tu correo electrónico",
      rememberMe: "Recuérdame",
      forgetPassword: "¿Olvidaste tu contraseña?",
      noAccount: "¿No tienes una cuenta?",
      signUpHere: "Regístrate",
      // Booking
      bookSession: "Planificar una sesión en vivo con un Sensei",
      selectSensei: "Seleccionar un Sensei",
      selectDate: "Seleccionar una fecha",
      selectTime: "Seleccionar una hora",
      bookNow: "Reservar Ahora",
      // Errors
      emailRequired: "El correo electrónico es obligatorio",
      nameRequired: "El nombre es obligatorio",
      addressRequired: "La dirección es obligatoria",
      goalRequired: "La meta es obligatoria",
      passwordRequired: "La contraseña es obligatoria",
      passwordsDoNotMatch: "Las contraseñas no coinciden",
      fillOutAllFields: "Por favor, complete todos los campos",
      // Initial Videos
      initialVideos: [
        {
          id: 1,
          title: 'Movimientos Avanzados de BJJ para MMA: Tutorial de Estrangulamiento Triangular',
          type: 'Jiu Jitsu Brasileño',
          level: 'Avanzado',
          time: '10-20 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/5UrATWw9ajQ?si=y_aVi2feJG426BUe',
          views: '50 vistas',
        },
        {
          id: 2,
          title: 'Dominando Técnicas de Golpeo: Lecciones de McGregor vs Poirier',
          type: 'Boxeo',
          level: 'Intermedio',
          time: '10-20 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/LTcnTC4EFYI?si=HNRUviuy6h6s6xE9',
          views: '10K vistas',
        },
        {
          id: 3,
          title: 'Técnicas Básicas de Karate para Principiantes: Kihon',
          type: 'Karate',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 1 semana',
          url: 'https://youtu.be/mwE4idADxuM?si=QCEwZvYdxRV1jVB-',
          views: '1.2K vistas',
        },
        {
          id: 4,
          title: 'Combinaciones Avanzadas de Muay Thai',
          type: 'Muay Thai',
          level: 'Avanzado',
          time: 'Menos de 10 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/tZzWgs2UQrE?si=0ID4j2eIb0BAVpqm',
          views: '8K vistas',
        },
        {
          id: 5,
          title: 'Patadas de Taekwondo: Dominando la Patada Circular',
          type: 'Taekwondo',
          level: 'Intermedio',
          time: '10-20 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/gKCcOv70CAw?si=-aPWgbFG5zsE6GNU',
          views: '5K vistas',
        },
        {
          id: 6,
          title: 'Técnicas Básicas de Bloqueo para Defensa Personal',
          type: 'Bloqueo',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 1 semana',
          url: 'https://youtu.be/x4LzZ3BxP7k?si=A1JScl75xMZGptb7',
          views: '800 vistas',
        },
        {
          id: 7,
          title: 'Golpeo Efectivo: Ejercicios de Boxeo y Kickboxing',
          type: 'Golpeo',
          level: 'Avanzado',
          time: 'Más de 20 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/bs7X3F-XYTc?si=2bw44qj5KEtO-O6K',
          views: '15K vistas',
        },
        {
          id: 8,
          title: 'Esquivar y Tejer: Técnicas Esenciales para Luchadores',
          type: 'Esquiva',
          level: 'Intermedio',
          time: 'Menos de 10 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/ABqs5V4q4S8?si=XFzNaRRltbOdNDn3',
          views: '7K vistas',
        },
        {
          id: 9,
          title: 'Barridos y Lanzamientos: Judo para MMA',
          type: 'Barridos',
          level: 'Avanzado',
          time: 'Más de 20 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/_Zi5spppIxY?si=ohAAy4mKkezvUnKd',
          views: '20K vistas',
        },
        {
          id: 10,
          title: 'Ejercicios de Juego de Pies para Boxeo para Principiantes',
          type: 'Boxeo',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/v0y86288Wt0?si=ScPGtodFGYMyPS-1',
          views: '3K vistas',
        },
        {
          id: 11,
          title: 'Técnicas de Clinch de Muay Thai para Luchadores Intermedios',
          type: 'Muay Thai',
          level: 'Intermedio',
          time: '10-20 minutos',
          date: 'hace 1 semana',
          url: 'https://youtu.be/SD2PvP-jVds?si=JS-Ft95bmcfwLIu5',
          views: '10K vistas',
        },
        {
          id: 12,
          title: 'Kata Avanzado de Karate: Gojushiho Sho',
          type: 'Karate',
          level: 'Avanzado',
          time: 'Más de 20 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/39p6Py3xTWA?si=HGEQPQqDWVgQfrGF',
          views: '25K vistas',
        },
        {
          id: 13,
          title: 'Ejercicios de Pase de Guardia de Jiu Jitsu Brasileño',
          type: 'Jiu Jitsu Brasileño',
          level: 'Intermedio',
          time: '10-20 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/ToVa7_I2ps4?si=NGq09DcWU3GReu45',
          views: '9K vistas',
        },
        {
          id: 14,
          title: 'Consejos de Sparring de Taekwondo para Principiantes',
          type: 'Taekwondo',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/JrmHkZRWXvo?si=c8KLTrwI913w7qnO',
          views: '2K vistas',
        },
        {
          id: 15,
          title: 'Técnicas Avanzadas de Bloqueo para MMA',
          type: 'Bloqueo',
          level: 'Avanzado',
          time: '10-20 minutos',
          date: 'hace 1 semana',
          url: 'https://youtu.be/jq7yqox1D5w?si=fmNY2VXpExpIp9u2',
          views: '11K vistas',
        },
        {
          id: 16,
          title: 'Combinaciones de Golpeo: Muay Thai y Boxeo',
          type: 'Golpeo',
          level: 'Intermedio',
          time: 'Más de 20 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/nxKukVoomL0?si=O1D6KtS9NeyT_eFF',
          views: '6K vistas',
        },
        {
          id: 17,
          title: 'Técnicas Efectivas de Esquiva para Defensa Personal',
          type: 'Esquiva',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/ooMjhFToGQw?si=q6852p3iMzKrdZV_',
          views: '900 vistas',
        },
        {
          id: 18,
          title: 'Barridos de Judo: Dominando Ashi Barai',
          type: 'Barridos',
          level: 'Intermedio',
          time: '10-20 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/igBN0Ef-FNE?si=8pHKhx8Vt4VLdERM',
          views: '4K vistas',
        },
        {
          id: 19,
          title: 'Combinaciones Avanzadas de Boxeo para Luchadores',
          type: 'Boxeo',
          level: 'Avanzado',
          time: '10-20 minutos',
          date: 'hace 1 semana',
          url: 'https://youtu.be/3ttZm7A_5ak?si=ANYVHiSPPq5m3bfl',
          views: '12K vistas',
        },
        {
          id: 20,
          title: 'Ejercicios de Patadas de Muay Thai para Potencia y Velocidad',
          type: 'Muay Thai',
          level: 'Avanzado',
          time: 'Más de 20 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/pOL06akWQkc?si=wGnRcGsxiAvb8V4n',
          views: '22K vistas',
        },
        {
          id: 21,
          title: 'Técnicas de Sparring de Karate para Practicantes Intermedios',
          type: 'Karate',
          level: 'Intermedio',
          time: 'Menos de 10 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/Hk__nFdfvMQ?si=Xs8d1eQfsXP8NYIv',
          views: '9K vistas',
        },
        {
          id: 22,
          title: 'Escapes de Sumisión de Jiu Jitsu Brasileño',
          type: 'Jiu Jitsu Brasileño',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 1 semana',
          url: 'https://youtu.be/09WKJb8adxw?si=tx7kPmoCvvfGitj4',
          views: '5K vistas',
        },
        {
          id: 23,
          title: 'Combinaciones Avanzadas de Sparring de Taekwondo',
          type: 'Taekwondo',
          level: 'Avanzado',
          time: 'Más de 20 minutos',
          date: 'hace 1 mes',
          url: 'https://www.youtube.com/live/HHNd-CCpAyQ?si=2cWYkTiyVMI-Y44-',
          views: '18K vistas',
        },
        {
          id: 24,
          title: 'Técnicas de Bloqueo para Defensa Personal en la Calle',
          type: 'Bloqueo',
          level: 'Intermedio',
          time: 'Menos de 10 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/LN8xKzjL_zk?si=fM7b49zh1TTp21EA',
          views: '7K vistas',
        },
        {
          id: 25,
          title: 'Ejercicios de Golpeo para Luchadores de MMA',
          type: 'Golpeo',
          level: 'Avanzado',
          time: '10-20 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/Q3mqj0S-ECY?si=YhCgZOWSNo__sFRU',
          views: '14K vistas',
        },
        {
          id: 26,
          title: 'Técnicas de Esquiva para Boxeo',
          type: 'Esquiva',
          level: 'Intermedio',
          time: 'Menos de 10 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/mktvu90FZHo?si=ndxKWkb23lRCNdR8',
          views: '6K vistas',
        },
        {
          id: 27,
          title: 'Fundamentos de Boxeo para Principiantes',
          type: 'Boxeo',
          level: 'Principiante',
          time: 'Menos de 10 minutos',
          date: 'hace 6 meses',
          url: 'https://youtu.be/kKDHdsVN0b8?si=AqFtpi3GaVWXnNZB',
          views: '4K vistas',
        },
        {
          id: 28,
          title: 'Trabajo de Clinch de Muay Thai para Luchadores Avanzados',
          type: 'Muay Thai',
          level: 'Avanzado',
          time: 'Más de 20 minutos',
          date: 'hace 2 semanas',
          url: 'https://youtu.be/Ng1Zh3OUo3w?si=_4bjDw-P9w0bR4NN',
          views: '17K vistas',
        },
        {
          id: 29,
          title: 'Kata de Karate para Estudiantes Intermedios',
          type: 'Karate',
          level: 'Intermedio',
          time: 'Menos de 10 minutos',
          date: 'hace 1 mes',
          url: 'https://youtu.be/5uAxkiBh0JI?si=rVeBgNrGYXE1Y2kZ',
          views: '8K vistas',
        }
      ],
    },
  },
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Use the saved language from localStorage
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;