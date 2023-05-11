 var listaTag = [' <img width="100%" src="tag1.jpg" alt="">',' <img width="100%" src="tag2.jpg" alt="">',' <img width="100%" src="tag3.jpg" alt="">']
 var listaStencil = [' <img width="100%" src="stencil1.jpg" alt="">',' <img width="100%" src="stencil2.jpg" alt="">',' <img width="100%" src="stencil3.jpg" alt="">']
 var lista3D = [' <img width="100%" src="3d1.jpg" alt="">',' <img width="100%" src="3d2.jpg" alt="">',' <img width="100%" src="3d3.jpg" alt="">']
 var listaWild = [' <img width="100%" src="wild1.jpg" alt="">',' <img width="100%" src="wild2.jpg" alt="">',' <img width="100%" src="wild3.jpg" alt="">']
 var listaBombing = [' <img width="100%" src="bomb4.jpg" alt="">',' <img width="100%" src="bomb2.jpg" alt="">',' <img width="100%" src="bomb3.jpg" alt="">']

function VerCarreira() {

    var NtreinosNaSemana = Number(ipt_Ntreinos.value)
   var escolha = ipt_tipos.value
   var tipo1 = ipt_tipo1.value
    var tipo2 = ipt_tipo2.value
    var tipo3 = ipt_tipo3.value
    var tipo4 = ipt_tipo4.value
   var tipo5 = ipt_tipo5.value
   
    
   var parte1 = `<section class="cardTitulo">
<div class="titulo">
    CADA PESSOA TEM UM TEMPO DE APRENDIZADO ENTAO NUNCA PARE DE PRATICAR, PARA SEMPRE EVOLUIR SEUS GRAFITES
</div>
</section>  `
 

   var parte4 = `
   <section class="cardTitulo">
<div class="titulo">
    COM ${(50/NtreinosNaSemana).toFixed(0)} SEMANAS DE TREINOS VOCE VAI CONSEGUIR CHEGAR EM UM NIVEL MUITO BOM DE APRENDIZADO E VAI REPRESENTAR A
        CENA DO GRAFITE !
</div>
</section> 
`

div_ver.innerHTML = ""
div_ver2.innerHTML = ""
div_ver3.innerHTML = ""

    if (NtreinosNaSemana == 1) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

            if (i == 1 || i == 2 || i == 3 || i == 5 || i == 6 || i == 7) {
                div_ver.innerHTML += ` 
                      <div class="cardDiaSemanaDescanso">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemanaDescanso">
          dia do descanso
        </div>
        </div>
        
         `
            } else {
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
        1- para sua tag escolha um nome que goste ou apelido; <br>
        2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
        3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
        4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
        5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
        <br>
       
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    } else if (NtreinosNaSemana == 2) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

            if (i == 1 || i == 3 || i == 4 || i == 5 || i == 7) {
                div_ver.innerHTML += ` 
                      <div class="cardDiaSemanaDescanso">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemanaDescanso">
          dia do descanso
        </div>
        </div>
        
         `
            } else {
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            1- para sua tag escolha um nome que goste ou apelido; <br>
            2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
            3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
            4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
            5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
            <br>
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }
    else if (NtreinosNaSemana == 3) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

            if (i == 1 || i == 3 || i == 5 || i == 7) {
                div_ver.innerHTML += ` 
                      <div class="cardDiaSemanaDescanso">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemanaDescanso">
          dia do descanso
        </div>
        </div>
        
         `
            } else {
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            1- para sua tag escolha um nome que goste ou apelido; <br>
            2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
            3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
            4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
            5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
            <br>
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }
    else if (NtreinosNaSemana == 4) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

            if (i == 1 || i == 4 || i == 7) {
                div_ver.innerHTML += ` 
                      <div class="cardDiaSemanaDescanso">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemanaDescanso">
          dia do descanso
        </div>
        </div>
        
         `
            } else {
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            1- para sua tag escolha um nome que goste ou apelido; <br>
            2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
            3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
            4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
            5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
            <br>
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }
    else if (NtreinosNaSemana == 5) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

            if ( i == 3 ||  i == 5 ) {
                div_ver.innerHTML += ` 
                      <div class="cardDiaSemanaDescanso">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemanaDescanso">
          dia do descanso
        </div>
        </div>
        
         `
            } else {
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            1- para sua tag escolha um nome que goste ou apelido; <br>
            2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
            3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
            4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
            5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
            <br>
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }
    else if (NtreinosNaSemana == 6) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

            if (i == 4) {
                div_ver.innerHTML += ` 
                      <div class="cardDiaSemanaDescanso">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemanaDescanso">
          dia do descanso
        </div>
        </div>
        
         `
            } else {
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            1- para sua tag escolha um nome que goste ou apelido; <br>
            2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
            3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
            4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
            5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
            <br>
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }
    else if (NtreinosNaSemana == 7) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        if(escolha == tipo1){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo1} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaTag[0]}
            </div>
            <div class="imagens">
            ${listaTag[1]}
            </div>
            <div class="imagens">
            ${listaTag[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo2){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo2} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaStencil[0]}
            </div>
            <div class="imagens">
            ${listaStencil[1]}
            </div>
            <div class="imagens">
            ${listaStencil[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo3){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo3} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${lista3D[0]}
            </div>
            <div class="imagens">
            ${lista3D[1]}
            </div>
            <div class="imagens">
            ${lista3D[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo4){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo4} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaWild[0]}
            </div>
            <div class="imagens">
            ${listaWild[1]}
            </div>
            <div class="imagens">
            ${listaWild[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }else if(escolha == tipo5){
            div_ver2.innerHTML += ` <div class="tituloTipos">
            voce escolheu ${tipo5} exemplos desse tipo sao:
        </div>
        <section class="containerTipo">
        
            <div class="imagens">
               ${listaBombing[0]}
            </div>
            <div class="imagens">
            ${listaBombing[1]}
            </div>
            <div class="imagens">
            ${listaBombing[2]}
            </div>
        </section>
        <div class="tituloContainer1">
            sua divisao na semana para praticar é:
        </div>`
        }
       
        while (i <= 7) {

           
                div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            1- para sua tag escolha um nome que goste ou apelido; <br>
            2- ache uma fonte da sua preferência(procure no google ou pinterest); <br>
            3- treine com a fonte escolhida o a sua tag no papel apenas com lapis; <br>
            4- treine com a mesma fonte só que agora com uma caneta com a ponta mais grossa; <br>
            5- tente usar algum spray da sua prefência para fazer a tag se não se acostumar, continue com caneta;
            <br>
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }

}
