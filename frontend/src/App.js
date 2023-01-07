import DrawChess from './components/chess/DrawChess.js';

const App = () =>{
  console.log("hello world");
  return (
    <div className="App">
      <header className="App-header">
        hello world
      </header>

      <body className="App-body">
        Body

        <DrawChess></DrawChess>
        
        End body
      </body>
    </div>
  );
}

export default App;
