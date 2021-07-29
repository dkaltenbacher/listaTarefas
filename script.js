function criarEvento(evento){
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const ul = document.querySelector('[data-form-ul]');
    const li = document.createElement('li');
    li.setAttribute('class', 'task');
    const text = document.createTextNode(input.value);
    li.appendChild(text);
    li.appendChild(btnConcluido());
    li.appendChild(btnDeletar());
    ul.appendChild(li);
    input.value = '';
}

const btn = document.querySelector('[data-form-button]');
btn.addEventListener('click',criarEvento);


function btnConcluido (){
    const btnConcluido = document.createElement('button');
    btnConcluido.setAttribute('class','form-button');
    btnConcluido.innerText = ('Concluido');


    btnConcluido.addEventListener('click',()=>{
        let li = btnConcluido.parentElement;
        li.setAttribute('class','content form-button');
    });
    return btnConcluido;
}


function btnDeletar(){
    const btnDeletar = document.createElement('button');
    btnDeletar.innerText = ('Deletar');
    btnDeletar.setAttribute('class','form-button');

    btnDeletar.addEventListener('click',()=>{
        let li = btnDeletar.parentElement;
        li.remove();
    })
    return btnDeletar;

}