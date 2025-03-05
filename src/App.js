import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [users, setUsers] = useState([])

  const aoNovoUser = (user) => {
    console.log(user)
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoCadastro = {user => aoNovoUser (user)}></Formulario>
    </div>
  );
}

export default App;
