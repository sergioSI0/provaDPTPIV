let saldoTotal = 0


document.querySelector('#salvar')
    .addEventListener('click', newLineTable)

function newLineTable(e) {

    const tableBody = document.querySelector('#table-body')
    const tableTR = document.createElement('tr')
    tableBody.insertAdjacentElement('afterbegin', tableTR)
    const selectTH = tableBody.querySelector('tr')

    let verifyDespesa = false

    let newValor = 0;

    const tipo = document.querySelector('#tipo')
    if (tipo.value.toLowerCase() === 'despesa') {
        // console.log('oi');
        let valor = +document.querySelector('#valor').value
        newValor = valor - (valor * 2)
        // console.log(valor);
        verifyDespesa = true
    }




    const inputsForm = document.querySelectorAll('input[type="text"]')

        .forEach((campo, index) => {

            if (verifyDespesa && index === 1) {
                selectTH.innerHTML += `<td>${newValor}</td>`
            } else {
                selectTH.innerHTML += `<td>${campo.value}</td>`
            }

        })

    const EveryTipo = document.querySelectorAll('#tipo')
    
    document.querySelectorAll('#valor')
        .forEach((valor, index) => {
            

            
            if (verifyDespesa && EveryTipo[index].value.toLowerCase() === 'despesa') {
                saldoTotal -= Number(valor.value)

            } else {
                saldoTotal += Number(valor.value)
            }

            // console.log(saldoTotal);
        })

    // console.log(tableBody);

    const resultSaldo = document.querySelector('#resultTable')
    resultSaldo.innerText = `Saldo R$ ${saldoTotal}`

}