import DrawChess from './components/chess/DrawChess.js';
import DrawNavbar from './components/navbar.js';
import Navbar from './components/navbar.js';

//import './App.scss';


const App = () =>{
  console.log("hello world");
  return (
    <div className="App">
      <header className="App-header">
        <DrawNavbar/>
      </header>

      <body className="App-body">
        Start Body

        <DrawChess></DrawChess>
        
        End body
      </body>
    </div>
  );
}

export default App;
