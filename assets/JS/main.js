document.getElementById('cad_form').addEventListener('submit', function(event) {
    event.preventDefault();
    
//Todos os elementos do Formulário do cadastro (se adicionar novos elementos lá, colocar com o mesmo nome do id)
    let nome = document.getElementById('nome').value;
    let tipo = document.getElementById('tipo').value;
    let dtEmbrq = document.getElementById('dtEmbrq').value;
    let dtRtn = document.getElementById('dtRtn').value;
    let local = document.getElementById('local').value;
    let kGEmbrc = document.getElementById('kGEmbrc').value;
//Salva no localstorage e transforma em string os elementos
    if (nome && tipo && dtEmbrq && dtRtn && local && kGEmbrc) {
        let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
        viagens.push({nome, tipo, dtEmbrq, dtRtn, local, kGEmbrc});
        localStorage.setItem('viagens', JSON.stringify(viagens));
        alert('Viagem cadastrada e registrada com sucesso!');
        document.getElementById('cad_form').reset();
    }
//Emitir um alerta caso algum dos campos ter dado nulo
        else {alert('ERRO!. Preencher todos os campos adequadamente.');}   
});