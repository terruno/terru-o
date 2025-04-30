window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: { background: "#000" },
      button: { background: "#f1d600", text: "#000" }
    },
    theme: "classic",
    position: "bottom",
    content: {
      message: "This website uses technical cookies for its operation.",
      dismiss: "Accept",
      link: "Learn more",
      href: "politica-cookies.html"
    }
  });
});