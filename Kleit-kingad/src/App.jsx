
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a KLEIT KINGAD
Donde se encuentran el estilo y la comodidad." />
      
    </>
  );
}

export default App;
