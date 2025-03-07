import { IoIosCloseCircle } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './User.css'

const User = ({user, corDeFundo, aoDeletar, aoFav}) => {
    return(
        <div className="user">
             <IoIosCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(user.id)} 
            />
            {
            user.favorito ?
                <FaHeart 
                    size={25}
                    className="favorito"
                    onClick={() => aoFav(user.id)}
                   
                />
                :
                <FaRegHeart 
                    size={25}
                    className="favorito"
                    onClick={() => aoFav(user.id)}
                
                />
            }
            <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
                <img src={user.imagem} alt='icon campeão' />
            </div>
            <div className="rodape">
                <h4>{user.nome}</h4>
                <h5>{user.titulo}</h5>
                <h4>{user.region}</h4>
            </div>
        </div>

    )
}

export default User