let refeicao;
let bebida;
let sobremesa;
let valor_r = 0; 
let valor_b = 0;
let valor_s = 0;
let valor_total = 0;
let nome_cliente;
let endereco_cliente;

function selecionar_r(item_menu, nome_item, valor_refeicao) {
    refeicao = nome_item;
    valor_r = parseFloat(valor_refeicao);
    const selecionado = document.querySelector('.refeicoes .selecionado');

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }
    const marcado = document.querySelector("." + item_menu);
    marcado.classList.add('selecionado');

    if(valor_r !== 0 && valor_b !== 0 && valor_s !== 0) {
        const escolhendo = document.querySelector('.fazendo-pedido');
        escolhendo.classList.add('escondido');
        const confirmando = document.querySelector('.fazer-pedido');
        confirmando.classList.remove('escondido');
    }
}

function selecionar_b(item_menu, nome_item, valor_refeicao) {
    bebida = nome_item;
    valor_b = parseFloat(valor_refeicao);
    const selecionado = document.querySelector('.bebidas .selecionado');

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }
    const marcado = document.querySelector("." + item_menu);
    marcado.classList.add('selecionado');

    if(valor_r !== 0 && valor_b !== 0 && valor_s !== 0) {
        const escolhendo = document.querySelector('.fazendo-pedido');
        escolhendo.classList.add('escondido');
        const confirmando = document.querySelector('.fazer-pedido');
        confirmando.classList.remove('escondido');
    }
}

function selecionar_s(item_menu, nome_item, valor_refeicao) {
    sobremesa = nome_item;
    valor_s = parseFloat(valor_refeicao);
    const selecionado = document.querySelector('.sobremesas .selecionado');

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }
    const marcado = document.querySelector("." + item_menu);
    marcado.classList.add('selecionado');

    if(valor_r !== 0 && valor_b !== 0 && valor_s !== 0) {
        const escolhendo = document.querySelector('.fazendo-pedido');
        escolhendo.classList.add('escondido');
        const confirmando = document.querySelector('.fazer-pedido');
        confirmando.classList.remove('escondido');
    }
}

function pedir() {
    nome_cliente = prompt('Por favor, informe seu nome: ');
    endereco_cliente = prompt('Por favor, informe seu endereço: ');

    valor_total = (valor_r + valor_b + valor_s);

    document.querySelector('.confirma-refeicao').innerHTML = refeicao;
    document.querySelector('.confirma-bebida').innerHTML = bebida;
    document.querySelector('.confirma-sobremesa').innerHTML = sobremesa;
    document.querySelector('.valor-refeicao').innerHTML = valor_r;
    document.querySelector('.valor-bebida').innerHTML = valor_b;
    document.querySelector('.valor-sobremesa').innerHTML = valor_s;
    document.querySelector('.valor-total').innerHTML = 'R$: '+valor_total.toFixed(2);
    document.querySelector('.nome-cliente').innerHTML = 'Nome: '+nome_cliente;
    document.querySelector('.endereco-cliente').innerHTML = 'Endereço: '+endereco_cliente;

    const pedido = document.querySelector('.container-resumo');
    pedido.classList.remove('escondido');
}

function cancelar() {
    const pedido = document.querySelector('.container-resumo');
    pedido.classList.add('escondido');
}

function confirmar_pedido() {
    const mensagem = encodeURIComponent("Olá, gostaria de fazer o pedido:"+
    "\n - Prato: "+refeicao+
    "\n - Bebida: "+bebida+
    "\n - Sobremesa: "+sobremesa+
    "\n Total: R$ "+valor_total.toFixed(2)+
    "\n Nome: "+nome_cliente+
    "\n Endereço: "+endereco_cliente);
    const mensagem_wpp = 'https://wa.me/5524998395477?text='+mensagem;
    window.open(mensagem_wpp);
}