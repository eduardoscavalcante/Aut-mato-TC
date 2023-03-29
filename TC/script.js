function btnClick(e){
    const btn = document.querySelectorAll("button");
    const btn2 = document.getElementById("inserirficha");
    btn.forEach(element => {
        if(element.classList.contains("actived") && element.id != e && element.id != btn2.id){
            element.classList.remove("actived");
        }
    });
    document.getElementById(e).classList.toggle("actived");
}

function btnC(){
    const btn = document.getElementById("inserirficha");
    btn.classList.add("actived");
}
function btnConfirmClick(){
    
    let imgMaquina = document.getElementById('imgMaquina');

    var error = document.getElementById("error");

    error.setAttribute('hidden', true);

    const btn = document.querySelectorAll("button");

    let btnConfirm = document.getElementById("btnConfirm");
    var inserirFicha = document.getElementById("inserirficha")
    if(!inserirFicha.classList.contains("actived"))
    {
        return;
    }
    inserirFicha.classList.remove("actived");
    btn.forEach(element => {
        if(element.classList.contains("actived")){
            btnConfirm.setAttribute("disabled", 'true');

            var elementId = element.getAttribute('id');
            setTimeout(function(){
                TransitionState(elementId, element.value);
            }, 1500);
        }
    });    
}

function TransitionState(state, entrada){
    
    var state0 = document.getElementById('state0');
    
    setTimeout(function(){

        state0.classList.remove('buttonStateAtual');
        var stateDiv = document.getElementById('state'+state[state.length-1]);
        stateDiv.classList.add('buttonStateAtual');


        imgMaquina.style.opacity = 0;

        if (entrada==1){
            imgMaquina.src = './img/maquina-coca.jpeg';
            descricao(1);
        }
        else if (entrada==2){
            imgMaquina.src = './img/maquina-fanta.jpeg';
            descricao(2);
        }
        else if (entrada==3){
            imgMaquina.src = './img/maquina-guarana.jpeg';
            descricao(3);
        }
        else if (entrada==4){
            imgMaquina.src = './img/maquina-sprite.jpeg';
            descricao(4);
        }
        else if (entrada==5){
            imgMaquina.src = './img/maquina-pepsi.jpeg';
            descricao(5);
        }
        else if (entrada==6){
            imgMaquina.src = './img/maquina-sukita.jpeg';
            descricao(6);
        }
        
        
        setTimeout(function(){
            stateDiv.classList.remove('buttonStateAtual');
            
            stateDiv = document.getElementById('state7');
            descricao(7);
            
            stateDiv.classList.remove('state7');
            stateDiv.classList.add('activedState');

            setTimeout(function(){ 
                state0.classList.add("buttonStateAtual")
                descricao(0);
                imgMaquina.src = './img/maquina-nova.jpeg';
                imgMaquina.style.opacity = 1;
                
                stateDiv.classList.remove('activedState');
                stateDiv.classList.add('state7');
                document.getElementById(state).classList.remove('actived');

                btnConfirm.removeAttribute('disabled')               
            }, 500);
        }, 2000);
    }, 2000);

}

function descricao(val) {
    var descricaoElemento = document.getElementById('descricao');
    switch (val) {
        case 0:
            descricaoElemento.innerHTML = 'Estado q0: Esperando ação do cliente...'
            break
        case 1:
            descricaoElemento.innerHTML = 'Estado q1: Escolhendo a Coca-Cola'
            break
        case 2:
            descricaoElemento.innerHTML = 'Estado q2: Escolhendo a Fanta'
            break
        case 3:
            descricaoElemento.innerHTML = 'Estado q3: Escolhendo o Guaraná'
            break
        case 4:
            descricaoElemento.innerHTML = 'Estado q4: Escolhendo a Sprite'
            break
        case 5:
            descricaoElemento.innerHTML = 'Estado q5: Escolhendo a Pepsi'
            break
        case 6:
            descricaoElemento.innerHTML = 'Estado q6: Escolhendo a Sukita'
            break
        case 7:
            descricaoElemento.innerHTML = 'Estado q7: Entregando o refrigerante...'
            break
        default:
            descricaoElemento.innerHTML = 'Estado q0: Esperando ação do cliente...'
            break
    }
}
