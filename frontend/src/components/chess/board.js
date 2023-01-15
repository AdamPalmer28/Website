import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DrawSquare = (prop) => {
    // draw a single chess square

    // color == 0 -> white
    // color == 1 -> black

    let color = 'dark';
    let font_color = 'light';

    // can I simplify this?
    if ((prop.index + (Math.floor(prop.index / 8) - 1) % 2) % 2 === 0) {
        // if white square
        color = 'light';
        font_color = 'dark';
        }
        

    function onSquareClick() {
        prop.onLeftClick(prop.index, prop.id); // call parent function
    }

    // html square
    return (
        <Col className='m-0 p-0'>
            <Card className={`bg-${color} position-relative text-${font_color}`} style={{height: 100}} onClick={onSquareClick}>
                {prop.id}
            </Card>
        </Col>
    );
}


const DrawBoard = (props) => {

    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

    function boardSquareClick(index, id) {
        //console.log(`You clicked square ${id}  (${index})`);
        props.onSquareSelect(index)
    }

    function CreateRow(props) {
        const row = props.row;

        let squareNums = [];
        let squareNames = [];

        for (let i = 0; i < 8; i++) { // columns
    
            const squareNum = row*8 + i; // square number
            squareNums.push(squareNum);

            const square = columns[i] + rows[row]; // square name
            squareNames.push(square);

            }

        return (
            <Row id={rows[row]} class="d-inline-block position-absolute">
                
                <DrawSquare id={squareNames[0]} index={squareNums[0]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[1]} index={squareNums[1]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[2]} index={squareNums[2]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[3]} index={squareNums[3]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[4]} index={squareNums[4]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[5]} index={squareNums[5]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[6]} index={squareNums[6]} onLeftClick={boardSquareClick}></DrawSquare>
                <DrawSquare id={squareNames[7]} index={squareNums[7]} onLeftClick={boardSquareClick}></DrawSquare>

            </Row>
            );
        }

    return (
        <div id="board-layout">

            <Container fluid className='grid' id="board">

                <CreateRow row={0}></CreateRow>
                <CreateRow row={1}></CreateRow>
                <CreateRow row={2}></CreateRow>
                <CreateRow row={3}></CreateRow>
                <CreateRow row={4}></CreateRow>
                <CreateRow row={5}></CreateRow>
                <CreateRow row={6}></CreateRow>
                <CreateRow row={7}></CreateRow>
            
            </Container>
        </div>
    );
}

export default DrawBoard;