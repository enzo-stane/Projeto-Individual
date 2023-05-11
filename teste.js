// listaTag = []
// listaStencil = []
// lista3D = []
// listaWild = []
// listaBombing []

function VerCarreira() {

    var NtreinosNaSemana = Number(ipt_Ntreinos.value)
   
    
   var parte1 = `<section class="cardTitulo">
<div class="titulo">
    CADA PESSOA TEM UM TEMPO DE APRENDIZADO ENTAO NUNCA PARE DE PRATICAR, PARA SEMPRE EVOLUIR SEUS GRAFITES
</div>
</section>  `
   var parte2 = ` <div class="tituloTipos">
    voce escolheu -tipo- exemplos desse tipo sao:
</div>
<section class="containerTipo">

    <div class="imagens">
       <img width="100%" src="stencil1.jpg" alt="">
    </div>
    <div class="imagens">
        <img width="100%" src="bomb2.jpg" alt="">
    </div>
    <div class="imagens">
        <img width="100%" src="wild2.jpg" alt="">
    </div>
</section>
<div class="tituloContainer1">
    sua divisao na semana para praticar é:
</div>


`
   var parte3= ` `
   var parte4 = `
   <section class="cardTitulo">
<div class="titulo">
    COM ${(50/NtreinosNaSemana).toFixed(0)} SEMANAS DE TREINOS VOCE VAI CONSEGUIR CHEGAR EM UM NIVEL MUITO BOM DE APRENDIZADO E VAI REPRESENTAR A
        CENA DO GRAFITE !
</div>
</section> 
`

div_ver2.innerHTML = ""

    if (NtreinosNaSemana == 1) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        div_ver2.innerHTML += `${parte2} `
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
            6- comece a praticar a mesma tag só que com fontes, cores, tamanhos diferentes;
            
        </div>


    </div>

`
            }
            i++
        }     
        div_ver3.innerHTML += `   ${parte4}`
    }
    else if (NtreinosNaSemana == 2) {
        var i = 1
        div_ver2.innerHTML += `${parte1}`
        div_ver2.innerHTML += `${parte2} `
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
        div_ver2.innerHTML += `${parte2} `
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
        div_ver2.innerHTML += `${parte2} `
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
        div_ver2.innerHTML += `${parte2} `
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
        div_ver2.innerHTML += `${parte2} `
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
        div_ver2.innerHTML += `${parte2} `
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