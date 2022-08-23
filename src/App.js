import logo from './paw.png';
import akitadog from './akita.jpeg';
import './App.css';


function App() {
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
                        <div class="tiles">
                            <div class="Row1">
                                <div class="row1pic">
                                    
                                        <img class="dogimage" src={akitadog} width="200" height="150" />
                                        
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                </div>
                                <div class="row1text">
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                </div>
                            </div>

                            <div class="Row1">
                                <div class="row1pic">
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                </div>
                                <div class="row1text">
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                </div>
                            </div>

                            <div class="Row1">
                                <div class="row1pic">
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                </div>
                                <div class="row1text">
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                </div>
                            </div>

                            <div class="Row1">
                                <div class="row1pic">
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                    <img class="dogimage" src={akitadog} width="200" height="150" />
                                </div>
                                <div class="row1text">
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                    <h1 class="dogtitle">Akita</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer">
                    <br></br>
                    <p class="FooterText"> Thank you for visiting! :) </p>
                </div>
            </div>


        )
    }
    export default App;
