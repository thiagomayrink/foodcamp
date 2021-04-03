let refeicao;
let bebida;
let sobremesa;
let valor_r;
let valor_b;
let valor_s;

function selecionar_r(item_menu, nome_item, valor_refeicao) {
    refeicao = nome_item;
    valor_r = valor_refeicao;
    const selecionado = document.querySelector('.refeicoes .selecionado');

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const marcado = document.querySelector("." + item_menu);
    marcado.classList.add('selecionado');
}

function selecionar_b(item_menu, nome_item, valor_refeicao) {
    bebida = nome_item;
    valor_b = valor_refeicao;
    const selecionado = document.querySelector('.bebidas .selecionado');

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const marcado = document.querySelector("." + item_menu);
    marcado.classList.add('selecionado');
}

function selecionar_s(item_menu, nome_item, valor_refeicao) {
    sobremesa = nome_item;
    valor_s = valor_refeicao;
    const selecionado = document.querySelector('.sobremesas .selecionado');

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }

    const marcado = document.querySelector("." + item_menu);
    marcado.classList.add('selecionado');
}