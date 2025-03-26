document.getElementById('conversor').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const valor = parseFloat(document.getElementById('valor').value);
    const paraMoeda = document.getElementById('paraMoeda').value;

    const apiUrl = `https://v6.exchangerate-api.com/v6/2759982764cc197890048b48/latest/BRL`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Pega a taxa de câmbio da moeda selecionada
            const exchangeRate = data.conversion_rates[paraMoeda];

            const valorConvertido = valor * exchangeRate;
                
            const resultado = document.getElementById('resultado');
            if (paraMoeda === "BTC") {
                resultado.textContent = `BTC ${valorConvertido.toFixed(8)}`;
            } else {
                resultado.textContent = `${paraMoeda} ${valorConvertido.toFixed(2)}`;
            }
            
        })

});