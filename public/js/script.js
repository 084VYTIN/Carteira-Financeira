// 1. Ao carregar a página, busca o histórico e calcula o saldo
window.onload = function() {
    fetch('/transacoes')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('historico');
            lista.innerHTML = ''; // Limpa antes de preencher
            
            let total = 0;
            // Percorre a lista que veio do servidor
            data.forEach(valor => {
                total += valor;
                adicionarAoHistoricoNaTela(valor);
            });
            
            document.getElementById('saldo').innerText = 'R$ ' + total.toFixed(2);
        });
};

// 2. Função de clique no botão
function adicionarDinheiro() {
    const valorInput = document.getElementById('valor');
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor)) {
        fetch('/adicionar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'valor=' + valor
        })
        .then(response => response.text())
        .then(novoSaldo => {
            document.getElementById('saldo').innerText = 'R$ ' + parseFloat(novoSaldo).toFixed(2);
            adicionarAoHistoricoNaTela(valor);
            valorInput.value = '';
        });
    }
}

function adicionarAoHistoricoNaTela(valor) {
    const lista = document.getElementById('historico');
    const item = document.createElement('li');
    const prefixo = valor >= 0 ? "✅" : "❌";
    item.innerHTML = `${prefixo} R$ ${valor.toFixed(2)}`;
    item.style.padding = "5px 0";
    item.style.borderBottom = "1px solid #eee";
    lista.prepend(item);
}