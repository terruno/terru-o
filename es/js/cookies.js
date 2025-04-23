<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      palette: {
        popup: { background: "#000" },
        button: { background: "#f1d600", text: "#000" }
      },
      theme: "classic",
      position: "bottom",
      content: {
        message: "Este sitio web utiliza cookies técnicas para su funcionamiento.",
        dismiss: "Aceptar",
        link: "Leer más",
        href: "politica-cookies.html"
      }
    });
  });