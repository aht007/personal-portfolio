import React from 'react';
import Header from '../src/components/Navbar'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'



class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
