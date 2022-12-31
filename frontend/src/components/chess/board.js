// draw board

drawSquare = (color) => {

    // color == 1 -> white
    // color == 0 -> black
    if (color == 1) {
        color = 'white'}
    else { color = 'black' }

    // html square
    return (
        <div class="square">



        </div>
    )
}


drawBoard = () => {

    for (let j = 0; j < 8; j++) {// rows

        for (let i = 0; i < 8; i++) { // columns

            squareNum = j*8 + i // square number

            color_ind = squareNum % 2 // color index

            drawSquare(color_ind)

        }
    }
    return (
        
    )
}