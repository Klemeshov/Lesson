import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";

const text = "Привет 2 ";


const App = () => {
    return (
        <div className="App">
            <Header text={text}>
                <input type="button"/>
            </Header>
            <SideBar/>
        </div>
    );
};

export default App;
