import { ChakraProvider } from '@chakra-ui/react'

// Components
import FirstComponent from './components/firstComponent/index.jsx'
import Home from './components/home/index.jsx';
import Butao from './components/button/index.jsx';

// CSS global
import './App.css';
import ManageDate from './components/estudo-hooks/index.jsx';
import ListRender from './components/listRender/index.jsx';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Curso de React com Hooks da Udemy</h1>
        <FirstComponent />
        <Home />
        <Butao />
        <ManageDate />
        <ListRender />
      </div>
    </ChakraProvider>
  );
}

export default App;
