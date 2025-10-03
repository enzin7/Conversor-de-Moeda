const valor: HTMLInputElement = document.getElementById('valor') as HTMLInputElement;
const paraMoeda: HTMLSelectElement = document.getElementById('paraMoeda') as HTMLSelectElement;
const resultado: HTMLElement = document.getElementById('resultado');

function converter() {
    const _valor: number = Number.parseFloat(valor.value);
    const _paraMoeda: string = paraMoeda.value;

    if (isNaN(_valor)) {
        resultado.textContent = `Insira um valor válido`;
        return;
    }

    const apiurl = `https://v6.exchangerate-api.com/v6/2759982764cc197890048b48/latest/BRL`;

    fetch(apiurl)
    .then(response => response.json())
    .then(taxa => {
        const taxaCambio: number = taxa.conversion_rates[_paraMoeda];
        const valorConvertido: number = _valor * taxaCambio;

        if (isNaN(valorConvertido)) {
            resultado.textContent = `Escolha a moeda`; 
            return;
        } else if (_paraMoeda === 'BTC') {
            resultado.textContent = `BTC ${valorConvertido.toFixed(8)}`;
            return;
        } else {
            resultado.textContent = `${_paraMoeda} ${valorConvertido.toFixed(2)}`
        }
    })
}

valor.addEventListener('input', converter);
paraMoeda.addEventListener('change', converter);