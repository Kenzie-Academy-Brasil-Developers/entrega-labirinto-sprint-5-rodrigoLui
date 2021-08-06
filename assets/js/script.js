function jogaNaTela() {
    const tela = document.getElementById('dimensao')
    const div = document.createElement('div')
    const map = [
        ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
        ['W',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ','W'],
        ['W',' ','W',' ','W',' ','W','W','W',' ','W','W','W','W','W',' ','W',' ','W',' ','W'],
        ['W',' ','W',' ','W',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ',' ',' ','W'],
        ['W',' ','W','W','W','W','W','W','W',' ','W',' ','W','W','W',' ','W',' ','W',' ','W'],
        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ','W'],
        ['W',' ','W','W','W',' ','W','W','W','W','W',' ','W','W','W','W','W',' ','W',' ','W'],
        ['W',' ','W',' ',' ',' ','W',' ',' ',' ','W',' ','W',' ',' ',' ',' ',' ','W',' ','W'],
        ['W',' ','W','W','W','W','W',' ','W',' ','W',' ','W',' ','W','W','W',' ','W',' ','F'],
        ['S',' ',' ',' ',' ',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W','W','W'],
        ['W','W','W','W','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W'],
        ['W',' ',' ',' ',' ',' ',' ',' ','W',' ','W',' ',' ',' ','W',' ','W',' ','W',' ','W'],
        ['W',' ','W','W','W','W','W','W','W',' ','W','W','W','W','W',' ','W',' ','W',' ','W'],
        ['W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ','W'],
        ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W']
    ];   

    for (let i = 0; i < map.length; i++) {

        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 'W') {
                const div = document.createElement('div')
                div.setAttribute('class','parede')
                div.setAttribute('block',`${i}:${j}`)
                tela.appendChild(div)
            }
            if (map[i][j] === ' ') {
                const div = document.createElement('div')
                div.setAttribute('class','piso')
                div.setAttribute('block',`${i}:${j}`)
                tela.appendChild(div)
            }
            if (map[i][j] === 'S') {
                const div = document.createElement('div')
                div.setAttribute('id','inicio')
                div.classList.add('player')
                div.setAttribute('block',`${i}:${j}`)
                tela.appendChild(div)
            }
            if (map[i][j] === 'F') {
                const div = document.createElement('div')
                div.setAttribute('id','fim')
                div.setAttribute('block',`${i}:${j}`)
                tela.appendChild(div)
            }
        }
    }

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        const box = document.getElementById('player')
        switch (keyName) {
            case 'ArrowLeft':
                movimento(alvo('ArrowLeft'))
            break;
            case 'ArrowRight':
    
                movimento(alvo('ArrowRight'))
            break;
            case 'ArrowUp':
                movimento(alvo('ArrowUp'))
            break;
            case 'ArrowDown':
                movimento(alvo('ArrowDown'))
            break;
            default:
                break;
        }
    });

    function alvo(seta) {
        const Player = document.querySelector('.player')
        let posicao = Player.getAttribute('block')
        let test = posicao.split(':')
        let linha = test[0]
        let coluna = test[1]
        let alvo = 0

        if (seta === 'ArrowUp') {
            let nL = Number(linha) - 1
            alvo = `${nL}:${coluna}`
       
            return alvo
        }
        if (seta === 'ArrowRight') {

            let nR = Number(coluna) + 1
            alvo = `${linha}:${nR}`
            console.log(alvo)
            return alvo
        }
        if (seta === 'ArrowDown') {
            let nL = Number(linha) + 1
            alvo = `${nL}:${coluna}`

            return alvo
        }
        if (seta === 'ArrowLeft') {
            let nR = Number(coluna) - 1
            alvo = `${linha}:${nR}`

            return alvo
        }
    }
} jogaNaTela()

function filtro(posicao) { //8:1
    let divAll = document.querySelectorAll('div')
    let arrayDivAll = [...divAll]

    let filtro = arrayDivAll.filter(test = (indiciArray) => {
        let divInd = indiciArray.getAttribute('block')

        if (posicao === divInd) {
            return indiciArray
        }
    })
    return filtro[0]
}

function verifique(divMuve) {
    return divMuve.classList.contains('parede') 
}

function movimento(alvo) {
    const Player = document.querySelector('.player')
    let posicaoAlvo = filtro(alvo)

    if(verifique(posicaoAlvo) === false){

        Player.classList.remove('player')


        posicaoAlvo.classList.add('player')
    }
}

function vitoria(alvo) {
    
}