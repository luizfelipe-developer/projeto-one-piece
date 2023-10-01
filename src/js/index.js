// passo 1 - pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // passo 3 - virificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        desselecionarBotao();
        desselecionarPersonagem();
        // passo 2- adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    })
})
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}