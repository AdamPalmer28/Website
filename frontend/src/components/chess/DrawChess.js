// draw Chess board and squares

import DrawBoard from './Board.js'

const DrawChess = () => {

    return (
        <div class = "Chess">
            <h1>My Chess board</h1>
            <div class = "Chess-board">
                <DrawBoard/>
            </div>
        </div>
    );

};


export default DrawChess;