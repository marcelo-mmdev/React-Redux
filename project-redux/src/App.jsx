import React from 'react';

import './index.css';

import SideBar from './components/sideBar/SideBar'
import Home from './components/home/Home'

// const spa = document.getElementById('root');
// ReactDOM.render('Olá Mundo!!!', spa);

export default function App(props){

    return (
        <div id='app'>
            <Home />
            <SideBar 
                titulo1='Componentes 1'
                titulo2='Componentes 2'
                titulo3={7.5}
            />
        </div>
    );
}
