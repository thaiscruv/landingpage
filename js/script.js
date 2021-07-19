const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let info = {
    nome,
    email,
  };

  let convertInfo = JSON.stringify(info);

  localStorage.setItem("lead", convertInfo);

  let content = document.getElementById("content");

  let carregando = "<p>Enviando... </p>";

  let obrigado = "<p>Obrigado! </p>";

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = obrigado;
  }, 1000);
});
