
function jogaNaTela() {
    let boxLeft = 0
    let boxTop = 270
    const tela = document.getElementById('dimensao')
    const div = document.createElement('div')
    div.setAttribute('id','player')
    tela.appendChild(div)

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
                tela.appendChild(div)
            }
            if (map[i][j] === ' ') {
                const div = document.createElement('div')
                div.setAttribute('class','piso')
                tela.appendChild(div)
            }
            if (map[i][j] === 'S') {
                const div = document.createElement('div')
                div.setAttribute('id','inicio')
                tela.appendChild(div)
            }
            if (map[i][j] === 'F') {
                const div = document.createElement('div')
                div.setAttribute('id','fim')
                tela.appendChild(div)
            }
        }
    }

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        const box = document.getElementById('player')

        switch (keyName) {
            case 'ArrowLeft':
                boxLeft-=10
                box.style.left = `${boxLeft}px`
                // document.getElementById('ratoM').style.transform = 'rotate(90deg)'
            break;

            case 'ArrowRight':
                boxLeft+=10
                box.style.left = `${boxLeft}px`
                // document.getElementById('ratoM').style.transform = 'rotate(-90deg)'

            break;

            case 'ArrowUp':
                boxTop-=10
                box.style.top = `${boxTop}px`
                // document.getElementById('ratoM').style.transform = 'rotate(180deg)'

            break;

            case 'ArrowDown':
                boxTop+=10
                box.style.top = `${boxTop}px`
                // document.getElementById('ratoM').style.transform = 'rotate(0deg)'

            break;

            default:
                break;
        }
        console.log(boxLeft)
    });
} jogaNaTela()