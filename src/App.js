import React from 'react';
import Header from '../src/components/Navbar'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <div className="home" style={{ padding: "12px", paddingBottom: "36px" }}>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
