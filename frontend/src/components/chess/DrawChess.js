// draw Chess board and squares

import DrawBoard from './board.js'



const DrawChess = () => {

    const squareSelected = (index) => {
        console.log(`Draw Chess: You clicked square ${index}`);
    };

    return (
        <div class = "container Chess">
            <h1>My Chess board</h1>
            <div class = "Chess-board">
                <DrawBoard onSquareSelect={squareSelected}/>
            </div>
        </div>
    );

};


export default DrawChess;