import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Titulo from './componentes/Titulo';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Suporte',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Atirador',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Jungler',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome: 'Mid Laner',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Top Laner',
      cor: '#d86ebf',
    }
  ])

  const [regions, setRegions] = useState([
    {
      id: uuidv4(),
      nome: 'Demacia',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Ionia',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Bandópolis',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome: 'Noxus',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Águas de Sentina',
      cor: '#d86ebf',
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: "FIORA",
      cargo: "A Grande Duelista",
      imagem: "https://i.pinimg.com/736x/31/d9/db/31d9db3890d283f644edeb1032382977.jpg",
      time: times[4].nome,
      region: regions[0].nome
    },
    {
      id: uuidv4(),
      nome: "GAREN",
      cargo: "O Poder de Demacia",
      imagem: "https://preview.redd.it/5u3cchijozt21.png?auto=webp&s=7cb29beb9c5c9e1dec7a0bd7d782d2242806e2ee",
      time: times[4].nome,
      region: regions[0].nome
    },
    {
      id: uuidv4(),
      nome: "YUUMI",
      cargo: "A Gata Mágica",
      imagem: "https://i.redd.it/849hp76jous41.png",
      time: times[0].nome,
      region: regions[2].nome
    },
    {
      id: uuidv4(),
      nome: "IRELIA",
      cargo: "A Dançarina das Lâminas",
      imagem: "https://leagueofitems.com/images/champions/tiles/256/39.webp",
      time: times[3].nome,
      region: regions[1].nome
    },
    {
      id: uuidv4(),
      nome: "EZREAL",
      cargo: "O Explorador Prodígio",
      imagem: "https://i.pinimg.com/736x/d2/06/d4/d206d42677f6a8ec4a905c7131cf2e36.jpg",
      time: times[1].nome,
      region: regions[0].nome
    }
  ]

  const [users, setUsers] = useState(inicial)

  const [filtro, setFiltro] = useState()

  const aoNovoUser = (user) => {
    setUsers([...users, user])
  }

  const deletarUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }
    ))
  }

  const mudarCorRegion = (cor, id) => {
    setRegions(regions.map(region => {
      if (region.id === id) {
        region.cor = cor;
      }
      return region;
    }
    ))
  }


  const filtroRegion = () =>{
    setFiltro('regiao')
    console.log(filtro)
    
  }

  const filtroLane = () =>{
    setFiltro('lane')
    console.log(filtro)

  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario 
        times={times.map(time => time.nome)} 
        regions={regions.map(regions => regions.nome)}
        aoCadastro={user => aoNovoUser(user)}
      ></Formulario>
      <Titulo
        regiao={filtroRegion}
        lane={filtroLane}
      >Meus Champions</Titulo>
      {filtro==='lane' &&
        times.map(time =>
          <Time
            key={time.id}
            time={time}
            users={users.filter(user => user.time === time.nome)}
            aoDeletar={deletarUser}
            mudarCor={mudarCorTime}
        />)}
      {filtro==='regiao' &&
        regions.map(region =>
          <Time
            key={region.id}
            time={region}
            users={users.filter(user => user.region === region.nome)}
            aoDeletar={deletarUser}
            mudarCor={mudarCorRegion}
      />)}
    </div>
  );
}

export default App;
