function ver() {

    var tipo = ipt_tipo.value
    var idade = Number(ipt_idade.value)
    var NtreinosNaSemana = Number(ipt_Ntreinos.value)

    

    if (NtreinosNaSemana == 1) {
        var i = 0
        while (i < 7) {
            i++
            if (i == 4) {
                div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
            } else {
                div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
            }
        }
    } else if (NtreinosNaSemana == 2) {
            var i = 1
            while (i <= 7) {

                if (i == 2 || i == 6) {
                    div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
                } else {
                    div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
                }
                i++
            }
        }else if (NtreinosNaSemana == 3) {
            var i = 1
            while (i <= 7) {

                if (i == 2 || i == 6 || i == 4) {
                    div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
                } else {
                    div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
                }
                i++
            }
        }else if (NtreinosNaSemana == 4) {
            var i = 1
            while (i <= 7) {

                if (i == 1 ||  i == 3 ||  i == 5 || i == 7 ) {
                    div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
                } else {
                    div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
                }
                i++
            }
        }else if (NtreinosNaSemana == 5) {
            var i = 1
            while (i <= 7) {

                if (i == 1 || i == 3 ||  i == 4 ||  i == 5 || i == 7 ) {
                    div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
                } else {
                    div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
                }
                i++
            }
        }else if (NtreinosNaSemana == 6) {
            var i = 1
            while (i <= 7) {

                if (i == 1 || i == 2 || i == 3 || i == 5  || i == 6 || i == 7) {
                    div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
                } else {
                    div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
                }
                i++
            }
        }else if (NtreinosNaSemana == 7) {
            var i = 1
            while (i <= 7) {

                if (i == 1 || i == 2 || i == 3 || i == 4 ||  i == 5 ||  i == 6 || i == 7 ) {
                    div_ver.innerHTML += `${i}dia da semana é dia de praticar <br> `
                } else {
                    div_ver.innerHTML += `${i}dia da semana é dia de descansar <br>`
                }
                i++
            }
        }



}