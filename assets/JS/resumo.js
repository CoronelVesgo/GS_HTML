document.addEventListener('DOMContentLoaded', function() {
    let viagens = JSON.parse(localStorage.getItem('viagens')) || [];

    function calcularTotalViagens() {
        return viagens.length;
    }

    function calcularTotalPeso() {
        return viagens.reduce((total, viagem) => total + parseInt(viagem.kGEmbrc), 0);
    }

    function calcularMediaPeso() {
        let totalViagens = calcularTotalViagens();
        let totalPeso = calcularTotalPeso();
        return totalViagens > 0 ? (totalPeso / totalViagens).toFixed(2) : 0;
    }

    function renderResumo() {
        let totalViagensElement = document.getElementById('totalViagens');
        let resumoBody = document.getElementById('resumoBody');
        let mediaPesoElement = document.getElementById('mediaPeso');

        totalViagensElement.textContent = `Total de Viagens: ${calcularTotalViagens()}`;

        resumoBody.innerHTML = '';
        viagens.forEach(viagem => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${viagem.nome}</td>
                <td>${viagem.tipo}</td>
                <td>${viagem.dtEmbrq}</td>
                <td>${viagem.dtRtn}</td>
                <td>${viagem.local}</td>
                <td>${viagem.kGEmbrc}</td>
            `;
            resumoBody.appendChild(row);
        });

        mediaPesoElement.textContent = `Média de Peso por Embarcação: ${calcularMediaPeso()} kg`;
    }

    renderResumo();
});