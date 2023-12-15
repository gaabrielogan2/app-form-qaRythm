function submitForm(event) {
    event.preventDefault();

    // Limpa mensagens de erro e sucesso ao reenviar
    esconderMensagens();

    // Validação simples, apenas campos de texto são obrigatórios
    const camposObrigatorios = ["nome", "sobrenome", "email", "pais"];

    const camposPreenchidos = camposObrigatorios.every(campo => {
        const valorCampo = document.getElementById(campo).value.trim();
        return valorCampo !== "";
    });

    if (!camposPreenchidos) {
        // Exibe mensagem de erro se algum campo obrigatório de texto estiver em branco
        exibirMensagemErro();
    } else {
        // Exibe mensagem de sucesso se todos os campos obrigatórios estiverem preenchidos
        exibirMensagemSucesso();
        // Reinicia o formulário após o envio bem-sucedido
        resetForm();
        // Aqui você pode enviar os dados para o servidor ou realizar outras ações necessárias
        // Exemplo: enviarFormulario();
    }
}

// Função adicional para enviar o formulário para o servidor (simulação)
function enviarFormulario() {
    // Lógica de envio para o servidor
    console.log("Enviando formulário para o servidor...");
}

// Função para redefinir o formulário
function resetForm() {
    document.getElementById("myForm").reset();
}

// Função para esconder mensagens após alguns segundos
function esconderMensagens() {
    setTimeout(function () {
        document.getElementById("mensagem-erro").style.display = "none";
        document.getElementById("mensagem-sucesso").style.display = "none";
    }, 1000); // 3000 milissegundos ou 3 segundos (ajuste conforme necessário)
}

// Função para exibir mensagem de erro
function exibirMensagemErro() {
    document.getElementById("mensagem-erro").style.display = "block";
    esconderMensagens();
}

// Função para exibir mensagem de sucesso
function exibirMensagemSucesso() {
    document.getElementById("mensagem-sucesso").style.display = "block";
    esconderMensagens();
}
