import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const DrawSquare = (prop) => {
    // draw a single chess square

    // color == 0 -> white
    // color == 1 -> black


    let color = 'dark';

    // can I simplify this?
    if ((prop.index + (Math.floor(prop.index / 8) - 1) % 2) % 2 === 0) {
        color = 'light';
        }
        

    // html square
    return (
        <Col className='m-0 p-0'>
            <Card className={`bg-${color} position-relative`} style={{height: 100}}>
                {prop.index}
            </Card>
        </Col>
    );
}


const DrawBoard = () => {

    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

    function OnClickSquare(index) {
        console.log("clicked");
        console.log(index);
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
                
                <DrawSquare id={squareNames[0]} index={squareNums[0]} onClick={OnClickSquare(squareNums[0])}></DrawSquare>
                <DrawSquare id={squareNames[1]} index={squareNums[1]} onClick={OnClickSquare(squareNums[1])}></DrawSquare>
                <DrawSquare id={squareNames[2]} index={squareNums[2]} onClick={OnClickSquare(squareNums[2])}></DrawSquare>
                <DrawSquare id={squareNames[3]} index={squareNums[3]} onClick={OnClickSquare(squareNums[3])}></DrawSquare>
                <DrawSquare id={squareNames[4]} index={squareNums[4]} onClick={OnClickSquare(squareNums[4])}></DrawSquare>
                <DrawSquare id={squareNames[5]} index={squareNums[5]} onClick={OnClickSquare(squareNums[5])}></DrawSquare>
                <DrawSquare id={squareNames[6]} index={squareNums[6]} onClick={OnClickSquare(squareNums[6])}></DrawSquare>
                <DrawSquare id={squareNames[7]} index={squareNums[7]} onClick={OnClickSquare(squareNums[7])}></DrawSquare>
 
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