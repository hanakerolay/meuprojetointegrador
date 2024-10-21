document.querySelector('form').addEventListener('submit', function(event) {
    var email = document.getElementById('usernameEmail').value;
    var password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault(); // Impede o envio do formulário
    }
});



document.querySelector('form.d-flex').addEventListener('submit', function(event) {
    var searchInput = document.querySelector('input[aria-label="Search"]').value;

    if (searchInput === "") {
        alert("Digite algo para pesquisar.");
        event.preventDefault(); // Impede o envio se o campo estiver vazio
    }
});


document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
});
