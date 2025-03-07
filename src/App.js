import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Titulo from './componentes/Titulo';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [lanes, setLanes] = useState([
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

  const [favs, setFavs] = useState([
    {
      id: uuidv4(),
      nome: 'Favoritos',
      cor: '#d86ebf',
    },

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
      favorito: false,
      nome: "FIORA",
      titulo: "A Grande Duelista",
      imagem: "https://i.pinimg.com/736x/31/d9/db/31d9db3890d283f644edeb1032382977.jpg",
      lane: lanes[4].nome,
      region: regions[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GAREN",
      titulo: "O Poder de Demacia",
      imagem: "https://preview.redd.it/5u3cchijozt21.png?auto=webp&s=7cb29beb9c5c9e1dec7a0bd7d782d2242806e2ee",
      lane: lanes[4].nome,
      region: regions[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "YUUMI",
      titulo: "A Gata Mágica",
      imagem: "https://i.redd.it/849hp76jous41.png",
      lane: lanes[0].nome,
      region: regions[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "IRELIA",
      titulo: "A Dançarina das Lâminas",
      imagem: "https://leagueofitems.com/images/champions/tiles/256/39.webp",
      lane: lanes[3].nome,
      region: regions[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "EZREAL",
      titulo: "O Explorador Prodígio",
      imagem: "https://i.pinimg.com/736x/d2/06/d4/d206d42677f6a8ec4a905c7131cf2e36.jpg",
      lane: lanes[1].nome,
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

  const mudarCorLane = (cor, id) => {
    setLanes(lanes.map(lane => {
      if (lane.id === id) {
        lane.cor = cor;
      }
      return lane;
    }
    ))
  }

  const favoritarUser = (id) =>{
    setUsers(users.map(user =>{
      if(user.id === id){
        if(user.favorito){
          user.favorito=false
        }
        else{
          user.favorito=true
        }
      }
      return user;
    }))
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

  const mudarCorFav = (cor, id) => {
    setFavs(favs.map(fav => {
      if (fav.id === id) {
        fav.cor = cor;
      }
      return fav;
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

  const filtroFav = () =>{
    setFiltro('fav')
    console.log(filtro)
  }

  return (
    <div className="App">
      <Formulario 
        lanes={lanes.map(lane => lane.nome)} 
        regions={regions.map(regions => regions.nome)}
        aoCadastro={user => aoNovoUser(user)}
      ></Formulario>
      <Titulo
        regiao={filtroRegion}
        lane={filtroLane}
        fav={filtroFav}
      >Meus Champions</Titulo>
      {filtro==='lane' &&
        lanes.map(lane =>
          <Time
            key={lane.id}
            time={lane}
            users={users.filter(user => user.lane === lane.nome)}
            aoDeletar={deletarUser}
            aoFav={favoritarUser}
            mudarCor={mudarCorLane}
        />)}
      {filtro==='regiao' &&
        regions.map(region =>
          <Time
            key={region.id}
            time={region}
            users={users.filter(user => user.region === region.nome)}
            aoDeletar={deletarUser}
            aoFav={favoritarUser}
            mudarCor={mudarCorRegion}
      />)}
      {filtro==='fav' &&
        favs.map(fav =>
          <Time
            key={fav.id}
            time={fav}
            users={users.filter(user => user.favorito)}
            aoDeletar={deletarUser}
            aoFav={favoritarUser}
            mudarCor={mudarCorFav}
      />)}
    </div>
  );
}

export default App;
