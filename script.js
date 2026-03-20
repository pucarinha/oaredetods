let isEnglish = false;

function toggleLanguage() {
  isEnglish = !isEnglish;

  document.getElementById("langBtn").innerText = isEnglish ? "PT" : "EN";

  document.getElementById("subtitle").innerText =
    isEnglish ? "A creative community space in Palmela" :
                "Um espaço comunitário criativo em Palmela";

  document.getElementById("about-title").innerText =
    isEnglish ? "About Us" : "Sobre Nós";

  document.getElementById("about-text").innerText =
    isEnglish
      ? "AR is a creative and collective community space where ideas and collaborations can grow."
      : "O AR é um espaço comunitário, criativo e coletivo, onde ideias, projetos e colaborações podem respirar e crescer.";

  document.getElementById("spaces-title").innerText =
    isEnglish ? "Our Spaces" : "Os Nossos Espaços";

  document.getElementById("how-title").innerText =
    isEnglish ? "How It Works" : "Como Funciona";

  document.getElementById("street-title").innerText =
    isEnglish ? "Open to the Street" : "Aberto para a Rua";

  document.getElementById("join-title").innerText =
    isEnglish ? "Join Us" : "Junta-te a Nós";

  document.getElementById("join-text").innerText =
    isEnglish ? "Come breathe with us." : "Vem respirar connosco.";
}
