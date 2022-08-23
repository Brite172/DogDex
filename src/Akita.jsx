import logo from './paw.png';
import akitadog from './akita.jpeg';
import './App.css';

function Akita() {
    return (
        <div className="everything">
            
            <div className="Header1">
                <header className="App-header">
                    <div className="App-header-items">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1> Welcome to DogDex! </h1>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </header>
            </div>
            <div className="Body1">
                <div className="App-body">
                    <h1> Akita! </h1>
                    <img class="doghoverimage" src={akitadog} width="200" height="150" />
                </div>
            </div>
            </div>
  );
}

export default Akita;
