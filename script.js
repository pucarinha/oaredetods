const translations = {
  pt: {
    navAbout: "Sobre",
    navSpaces: "Espaços",
    navEvents: "Eventos",
    navGallery: "Galeria",
    navContact: "Contacto",
    eyebrow: "Palmela, Portugal",
    heroTitle: "Um espaço comunitário criativo",
    heroText:
      "Um lugar para respirar ideias, criar em conjunto e fortalecer ligações na comunidade.",
    heroBtn1: "Ver eventos",
    heroBtn2: "Entrar em contacto",

    aboutKicker: "Sobre",
    aboutTitle: "Sobre Nós",
    aboutP1:
      "O AR é um espaço comunitário, criativo e coletivo, onde ideias, projetos e colaborações podem respirar e crescer.",
    aboutP2:
      "Somos um lugar de encontro, partilha e co-criação — aberto a todas as pessoas que procuram um ambiente inspirador e dinâmico para trabalhar, aprender e criar.",
    aboutP3:
      "A nossa missão é simples: tornar acessíveis espaços versáteis e multifuncionais, apoiando a criatividade, a ligação entre pessoas e o desenvolvimento da comunidade.",

    spacesKicker: "Espaços",
    spacesTitle: "Os Nossos Espaços",
    space1Title: "Trabalho e reuniões",
    space1Text: "Para freelancers, empreendedores e pequenas equipas.",
    space2Title: "Salas de ensaio",
    space2Text: "Para artistas e performers desenvolverem o seu trabalho.",
    space3Title: "Workshops e aulas",
    space3Text: "Espaços para aprendizagem, mentoring e partilha.",
    space4Title: "Exposição",
    space4Text: "Para artistas mostrarem o seu trabalho à comunidade.",
    space5Title: "Cinema e apresentações",
    space5Text: "Para projeções, conversas, sessões e pequenos eventos.",
    space6Title: "Montras artísticas",
    space6Text: "Intervenções visuais que dialogam com a rua e com quem passa.",

    eventsKicker: "Agenda",
    eventsTitle: "Próximos Eventos",
    eventsIntro: "Ao longo do mês, o AR recebe encontros, oficinas, projeções e momentos de partilha abertos à comunidade.",
    event1Title: "Workshop de Colagem e Expressão Visual",
    event1Text:
      "Uma sessão aberta para explorar composição, recorte e criação coletiva.",
    event2Title: "Cine-noite Comunitária",
    event2Text:
      "Projeção de um filme seguida de conversa informal e partilha de ideias.",
    event3Title: "Encontro Aberto de Projetos Locais",
    event3Text:
      "Um momento para apresentar iniciativas, criar ligações e imaginar colaborações.",

    galleryKicker: "Galeria",
    galleryTitle: "Imagens do Espaço",
    galleryIntro:  "O espaço, atividades, montras e eventos.",

    calloutTitle: "Um espaço onde as ideias respiram.",
    calloutText:
      "Disponível por marcação, com base em doação e/ou troca, para tornar a criação e o encontro mais acessíveis.",

    contactKicker: "Contacto",
    contactTitle: "Junta-te a Nós",
    contactText:
      "Vem respirar connosco. Traz as tuas ideias, projetos e curiosidade."
  },

  en: {
    navAbout: "About",
    navSpaces: "Spaces",
    navEvents: "Events",
    navGallery: "Gallery",
    navContact: "Contact",
    eyebrow: "Palmela, Portugal",
    heroTitle: "A creative community space",
    heroText:
      "A place to breathe ideas, create together, and strengthen community connections.",
    heroBtn1: "View events",
    heroBtn2: "Get in touch",

    aboutKicker: "About",
    aboutTitle: "About Us",
    aboutP1:
      "AR is a creative and collective community space where ideas, projects, and collaborations can breathe and grow.",
    aboutP2:
      "We are a place for meeting, sharing, and co-creation — open to everyone seeking an inspiring and dynamic environment to work, learn, and create.",
    aboutP3:
      "Our mission is simple: to make versatile and multifunctional spaces accessible to all, supporting creativity, connection, and community development.",

    spacesKicker: "Spaces",
    spacesTitle: "Our Spaces",
    space1Title: "Work and meetings",
    space1Text: "For freelancers, entrepreneurs, and small teams.",
    space2Title: "Rehearsal rooms",
    space2Text: "For artists and performers to develop their work.",
    space3Title: "Workshops and classes",
    space3Text: "Spaces for learning, mentoring, and sharing.",
    space4Title: "Exhibition space",
    space4Text: "For artists to present their work to the community.",
    space5Title: "Cinema and presentations",
    space5Text: "For screenings, talks, sessions, and small events.",
    space6Title: "Street-facing windows",
    space6Text: "Visual interventions that connect with the street and passersby.",

    eventsKicker: "Agenda",
    eventsTitle: "Upcoming Events",
    eventsIntro:
      "A simple example of how to present the programme. Later, you only need to replace the text.",
    event1Title: "Collage and Visual Expression Workshop",
    event1Text:
      "An open session to explore composition, cutting, and collective creation.",
    event2Title: "Community Film Night",
    event2Text:
      "A film screening followed by an informal conversation and exchange of ideas.",
    event3Title: "Open Meeting for Local Projects",
    event3Text:
      "A moment to present initiatives, build connections, and imagine collaborations.",

    galleryKicker: "Gallery",
    galleryTitle: "Space Gallery",
    galleryIntro:
      "Replace these images with real photos of the space, activities, window displays, or events.",

    calloutTitle: "A space where ideas can breathe.",
    calloutText:
      "Available by appointment, based on donation and/or exchange, making creativity and connection more accessible.",

    contactKicker: "Contact",
    contactTitle: "Join Us",
    contactText:
      "Come breathe with us. Bring your ideas, projects, and curiosity."
  }
};

let currentLang = "pt";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.getElementById("langBtn").textContent = lang === "pt" ? "EN" : "PT";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  applyLanguage(currentLang);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

applyLanguage(currentLang);
