var listaTag = [' <img width="100%" src="../assets/imgs/tag1.jpg" alt="">', ' <img width="100%" src="../assets/imgs/tag2.jpg" alt="">', ' <img width="100%" src="../assets/imgs/tag3.jpg" alt="">']
var listaStencil = [' <img width="100%" src="../assets/imgs/stencil1.jpg" alt="">', ' <img width="100%" src="../assets/imgs/stencil2.jpg" alt="">', ' <img width="100%" src="../assets/imgs/stencil3.jpg" alt="">']
var lista3D = [' <img width="100%" src="../assets/imgs/3d1.jpg" alt="">', ' <img width="100%" src="../assets/imgs/3d2.jpg" alt="">', ' <img width="100%" src="../assets/imgs/3d3.jpg" alt="">']
var listaWild = [' <img width="100%" src="../assets/imgs/wild1.jpg" alt="">', ' <img width="100%" src="../assets/imgs/wild2.jpg" alt="">', ' <img width="100%" src="../assets/imgs/wild3.jpg" alt="">']
var listaBombing = [' <img width="100%" src="../assets/imgs/bomb4.jpg" alt="">', ' <img width="100%" src="../assets/imgs/bomb2.jpg" alt="">', ' <img width="100%" src="../assets/imgs/bomb3.jpg" alt="">']


var Treino = {
    "descrição1": "Escolha um nome ou apelido para sua tag; ",
    "descrição2": "Pegue uma fonte como referência(utilize Google ou Pinterest); ",
    "descrição3": "Veja em nosso site as características de cada grafite; ",
    "descrição4": "Comece treinando no papel com lápis;  ",
    "descrição5": "Treine letras e formas geométricas;  ",
    "descrição6": "Treine setas e detalhes;  ",
    "descrição7": "Treine sombra e ponto de luz; ",
    "descrição8": "depois de evoluir nesses detalhes, comece a usar canetas para dar uma cor ao seu grafite; ",
    "descrição9": "depois de bastante treino comece a usar spray e tinta; ",
    "descrição10": "e para finalizar com autorização saia do papel e pratique nos muros(só faça isso com autorização). ",
}


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
    CADA PESSOA TEM UM TEMPO DE APRENDIZADO ENTÃO NUNCA PARE DE PRATICAR, PARA SEMPRE EVOLUIR SEUS GRAFITES
</div>
</section>  `


    var parte4 = `
   <section class="cardTitulo">
<div class="titulo">
    COM ${(50 / NtreinosNaSemana).toFixed(0)} SEMANAS DE TREINO VOCÊ VAI CONSEGUIR CHEGAR EM UM NÍVEL MUITO BOM DE APRENDIZADO E VAI REPRESENTAR A
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>
        `
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
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
       
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
        
                
               
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
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
            
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
                
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
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
            
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
                
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
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
            
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
                
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        }

        while (i <= 7) {

            if (i == 3 || i == 5) {
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
            
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
                
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
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
            
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
                
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
        if (escolha == tipo1) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo1} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo2) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo2} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo3) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo3} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo4) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo4} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        } else if (escolha == tipo5) {
            div_ver2.innerHTML += ` <div class="tituloTipos">
            você escolheu ${tipo5} exemplos desse tipo são:
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
            sua divisão na semana para praticar é:
        </div>`
        }

        while (i <= 7) {


            div_ver.innerHTML += `   
                <div class="cardDiaSemana">
        <div class="tituloCardDiaSemana">
            ${i}ºdia da semana 
        </div>
        <div class="conteudoCardDiaSemana">
            
        ${Treino.descrição1}<br>
        ${Treino.descrição2}<br>
        ${Treino.descrição3}<br>
        ${Treino.descrição4}<br>
        ${Treino.descrição5}<br>
        ${Treino.descrição6}<br>
        ${Treino.descrição7}<br>
        ${Treino.descrição8}<br>
        ${Treino.descrição9}<br>
        ${Treino.descrição10}<br>
                
        </div>


    </div>

`

            i++
        }
        div_ver3.innerHTML += `   ${parte4}`
    }

}
