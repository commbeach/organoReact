import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Suporte',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Atirador',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: 'Jungler',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Mid Laner',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9',
    },
    {
      nome: 'Top Laner',
      corPrimaria: '#d86ebf',
      corSecundaria: '#fae9f5',
    }
  ]

  const [users, setUsers] = useState([])

  const aoNovoUser = (user) => {
    console.log(user)
    setUsers([...users,user])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(time => time.nome)} aoCadastro = {user => aoNovoUser (user)}></Formulario>
      {times.map(time => 
      <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        users={users.filter(user => user.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
