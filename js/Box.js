let x = 0
let y = 0
let fx = 0
let fy = 0
let score = 0
const box = document.getElementById('box')
const frog = document.getElementById('frog')

function frogjump(){
    fx = Math.floor(Math.random() * 1366)
    fx=y = Math.floor(Math.random() * 768)
    frog.style.top = fy + 'px'
    frog.style.top = fx + 'px'
}

function moveBox(direction){
    switch (direction) {
        case 'up':
            y -= 10
            break;
        case 'down':
            y += 10
             break;
             case 'right':
                x += 10
                 break;
                 case 'left':
                    x -= 10
                     break;
          
    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

//add event list to document

document.addEventListener('keydown', function (event) {
    switch (event.key) {
  
        case 'ArrowUP':
            moveBox('up')
            break;
            case 'ArrowDown':
                moveBox('down')
                break;
                case 'ArrowRight':
                    moveBox('right')
                    break;
                    case 'ArrowLeft':
                        moveBox('left')
                        break;
        case 'w':
            moveBox('up')
            break;
            case 's':
                moveBox('down')
                break;
                case 'd':
                    moveBox('right')
                    break;
                    case 'a':
                        moveBox('left')
                        break;
                        case 'j':
                            fy += 10
                            fx -= 10
                            frogjump('jump')
                            break;
    }
          
    })