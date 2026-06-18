fetch('/saldo')
    .then(response => response.text())
    .then(data => {
        document.getElementById('saldo').innerText = parseFloat(data).toFixed(2);
    });

function adicionarDinheiro() {
    const valor = document.getElementById('valor').value;

    fetch('/adicionar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'valor=' + valor
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('saldo').innerText = parseFloat(data).toFixed(2);
    });
}