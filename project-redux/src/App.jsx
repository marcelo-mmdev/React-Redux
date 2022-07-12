import React from 'react';
import './index.css';
import './App.css';

import Family from './components/family/index';
import Card from './components/layout/index';
import SideBar from './components/sideBar/SideBar';
import Home from './components/home/Home';

// const spa = document.getElementById('root');
// ReactDOM.render('Olá Mundo!!!', spa);

export default function App(props){

    return (
        <div className='App'>
            <div className='Cards'>
                <Card title='Test'>
                    <Home />
                </Card>
                <Card title='Test2'>
                    <SideBar 
                        titulo1='Componentes 1'
                        titulo2='Componentes 2'
                        titulo3={7.5}
                    />
                </Card>
                <Card title='Children'>
                    <Family sobreNome='Rodrigues' />
                </Card>
            </div>
        </div>
    );
}
