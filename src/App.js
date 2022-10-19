import React from 'react';
import Header from '../src/components/Navbar'
import "./App.css"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Header />
                    <div className="home" style={{ padding: "12px", paddingBottom: "36px" }}>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                            <Route exact path='contact' element={<Contact />} />
                        </Routes>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
