document.addEventListener('DOMContentLoaded', function() {
    let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
    let listaViagens = document.getElementById('listaViagens');
    let deleteSelectedButton = document.getElementById('deleteSelected');

    function renderViagens(viagens) {
        listaViagens.innerHTML = '';
        viagens.forEach((viagem, index) => {
            let li = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.index = index;

            let span = document.createElement('span');
            span.textContent = `${viagem.nome} - ${viagem.tipo} - ${viagem.dtEmbrq} - ${viagem.dtRtn} - ${viagem.local} - ${viagem.kGEmbrc} kg`;

            let editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', function() {
                let nome_new = prompt('Novo Nome:', viagem.nome);
                let tipo_new = prompt('Novo Tipo:', viagem.tipo);
                let dtEmbrq_new = prompt('Nova Data de Embarque:', viagem.dtEmbrq);
                let dtRtn_new = prompt('Nova Data de Retorno:', viagem.dtRtn);
                let local_new = prompt('Novo Local:', viagem.local);
                let kGEmbrc_new = prompt('Novo Peso (kg):', viagem.kGEmbrc);

            //Edita Viagens já salvas.
                if (nome_new && tipo_new && dtEmbrq_new && dtRtn_new && local_new && kGEmbrc_new) {
                    viagens[index] = { nome: nome_new, tipo: tipo_new, dtEmbrq: dtEmbrq_new, dtRtn: dtRtn_new, local: local_new, kGEmbrc: kGEmbrc_new };
                    localStorage.setItem('viagens', JSON.stringify(viagens));
                    renderViagens(viagens);
                } else {alert('Todos os campos devem ser preenchidos.');}               
            });

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', function() {
                viagens.splice(index, 1);
                localStorage.setItem('viagens', JSON.stringify(viagens));
                renderViagens(viagens);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            listaViagens.appendChild(li);
        });
    }

    function updateDeleteButtonState() {
        let selected = listaViagens.querySelectorAll('input[type="checkbox"]:checked').length;
        deleteSelectedButton.disabled = selected === 0;
    }

    deleteSelectedButton.addEventListener('click', function() {
        let selectedCheckboxes = listaViagens.querySelectorAll('input[type="checkbox"]:checked');
        let indicesToDelete = Array.from(selectedCheckboxes).map(checkbox => parseInt(checkbox.dataset.index));
        viagens = viagens.filter((_, index) => !indicesToDelete.includes(index));
        localStorage.setItem('viagens', JSON.stringify(viagens));
        renderViagens(viagens);
    });

    listaViagens.addEventListener('change', updateDeleteButtonState);
//Esta é a função que permite que a barra de pesquisa/consulta funcione, as letras ela transforma em minusculas e 
    document.getElementById('search').addEventListener('input', function(event) {
        let pesquisa = event.target.value.toLowerCase();
        let filteredViagens = viagens.filter(viagem =>
            viagem.nome.toLowerCase().includes(pesquisa) ||
            viagem.tipo.toLowerCase().includes(pesquisa) ||
            viagem.dtEmbrq.includes(pesquisa) ||
            viagem.dtRtn.includes(pesquisa) ||
            viagem.local.toLowerCase().includes(pesquisa) ||
            viagem.kGEmbrc.toLowerCase().includes(pesquisa)
        );
        renderViagens(filteredViagens);
    });

    renderViagens(viagens);
});

