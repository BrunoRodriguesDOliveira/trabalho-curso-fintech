const form = document.getElementById("cadastroForm");
const lista = document.getElementById("listaUsuarios");
const msg = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;

  const cpfMascarado = "***.***.***-" + cpf.slice(-2);

  const usuario = document.createElement("div");
  usuario.classList.add("usuario");
  usuario.innerHTML = `
    <strong>${nome}</strong><br>
    ${cpfMascarado}<br>
    ${email}
  `;

  lista.appendChild(usuario);

  msg.textContent = "Cadastrado com sucesso!";

  form.reset();
});