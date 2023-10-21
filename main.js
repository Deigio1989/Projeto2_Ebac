const form = document.getElementById('formAgenda');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const nome = document.getElementById('nome');
    const tel = document.getElementById('tel');
    
    let nomeValue= nome.value;
    let telValue= tel.value;
    
        if (telValue.length>9 ){
            let linha = '<tr>';
        linha += `<td>${nomeValue}</td>`;
        linha += `<td>${telValue}</td>`;
        linha += `</tr>`;

        const table = document.querySelector('tbody');
        table.innerHTML += linha;
        nome.value='';
        tel.value='';

        }
        else {
            alert('O telefone possui menos digitos do que o necessário');
        }

        
    
    
}
);