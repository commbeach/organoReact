import { IoIosCloseCircle } from "react-icons/io";
import './User.css'

const User = ({user, corDeFundo, aoDeletar}) => {
    return(
        <div className="user">
             <IoIosCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(user.id)} 
            />
            <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
                <img src={user.imagem} alt='icon campeão' />
            </div>
            <div className="rodape">
                <h4>{user.nome}</h4>
                <h5>{user.cargo}</h5>
                <h4>{user.region}</h4>
            </div>
        </div>

    )
}

export default User