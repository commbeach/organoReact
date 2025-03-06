import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Titulo from './componentes/Titulo';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Suporte',
      cor: '#57c278',
    },
    {
      nome: 'Atirador',
      cor: '#82cffa',
    },
    {
      nome: 'Jungler',
      cor: '#e06b69',
    },
    {
      nome: 'Mid Laner',
      cor: '#ffba05',
    },
    {
      nome: 'Top Laner',
      cor: '#d86ebf',
    }
  ])

  const [users, setUsers] = useState([])

  const aoNovoUser = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  const deletarUser = (t) => {
    console.log("ao deletar", t)
  }

  const mudarCorTime = (cor, nome) => {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }
    ))
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(time => time.nome)} aoCadastro={user => aoNovoUser(user)}></Formulario>
      <Titulo>Meu Time</Titulo>
      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          users={users.filter(user => user.time === time.nome)}
          aoDeletar={deletarUser}
          mudarCor={mudarCorTime}
        />)}
    </div>
  );
}

export default App;
