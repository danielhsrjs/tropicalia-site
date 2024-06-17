function topFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("logo").style.display = "block";
    } else {
        document.getElementById("logo").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//CARRINHO
let numero_de_roupas = 0;
let valorTotal = 0;

function produtoFunction(val1, val2) {
    // if (numero_de_roupas == 0) {
    //     const elemento1 = document.getElementById('vazio1');
    //     const elemento2 = document.getElementById('vazio2');
    //     const elemento3 = document.getElementById('vazio3');

    //     elemento1.remove();
    //     elemento2.remove();
    //     elemento3.remove();
    // }

    numero_de_roupas++;
    alert("Item adicionado ao carrinho!");
    let nova_roupa = document.createElement('div');
    let novo_preco = document.createElement('div');
    let remover = document.createElement('div');
    let remover_botao = document.createElement('button');

    // Definindo IDs e Classes
    const uniqueClass = `compra${numero_de_roupas}`;
    nova_roupa.className = `item ${uniqueClass}`;
    novo_preco.className = `item ${uniqueClass}`;
    remover.className = `item ${uniqueClass}`;
    remover_botao.className = `remove-button ${uniqueClass}`;

    nova_roupa.innerText = val1;
    novo_preco.innerText = `R$${val2}`;
    remover_botao.innerText = 'Remover';

    let elemento = document.querySelector('.carrinho-info');
    let precoNumerico = parseFloat(val2);
    valorTotal += precoNumerico;

    // Estilos
    nova_roupa.style.gridColumn = 1;
    nova_roupa.style.fontSize = '30px';
    nova_roupa.style.color = 'black';
    nova_roupa.style.backgroundColor = 'white';
    nova_roupa.style.height = '100px';
    nova_roupa.style.display = 'flex';
    nova_roupa.style.alignItems = 'center';
    nova_roupa.style.justifyContent = 'center';

    novo_preco.style.gridColumn = 2;
    novo_preco.style.fontSize = '30px';
    novo_preco.style.color = 'white';
    novo_preco.style.backgroundColor = 'rgb(192, 192, 192)';
    novo_preco.style.height = '100px';
    novo_preco.style.display = 'flex';
    novo_preco.style.alignItems = 'center';
    novo_preco.style.justifyContent = 'center';

    remover.style.gridColumn = 3;
    remover.style.fontSize = '30px';
    remover.style.color = 'black';
    remover.style.backgroundColor = 'rgb(134, 134, 134)';
    remover.style.height = '100px';
    remover.style.display = 'flex';
    remover.style.alignItems = 'center';
    remover.style.justifyContent = 'center';

    remover_botao.style.fontSize = '25px';
    remover_botao.style.padding = '10px';
    remover_botao.style.backgroundColor = '#d15252';
    remover_botao.style.color = 'white';
    remover_botao.style.borderRadius = '20px';
    remover_botao.style.borderTop = '2px solid white';
    remover_botao.style.borderLeft = '2px solid white';
    remover_botao.style.borderRight = '2px solid black';
    remover_botao.style.borderBottom = '2px solid black';
    remover_botao.style.transition = 'background-color 0.3s ease';

    elemento.appendChild(nova_roupa);
    elemento.appendChild(novo_preco);
    elemento.appendChild(remover);
    remover.appendChild(remover_botao);

    remover_botao.addEventListener('mouseover', () => {
        remover_botao.style.backgroundColor = '#8a2727';
    });

    remover_botao.addEventListener('mouseout', () => {
        remover_botao.style.backgroundColor = '#d15252';
    });

    remover_botao.addEventListener('click', () => {
        const elementsToRemove = document.querySelectorAll(`.${uniqueClass}`);
        elementsToRemove.forEach(element => {
            element.remove();
        });
        valorTotal -= precoNumerico;  // Subtrai o preço do item removido do valor total
        numero_de_roupas--;
    });

    console.log(numero_de_roupas);
    
}

function comprarFunction() {
    if (numero_de_roupas == 0) {
        alert("Você não selecionou nada!");
    } else {
        alert(`Sua compra foi realizada! O preço total é de R$${valorTotal.toFixed(2)}`)
    }
}
