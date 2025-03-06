import { IoIosCloseCircle } from "react-icons/io";
import './User.css'

const User = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
    return(
        <div className="user">
             <IoIosCloseCircle 
                size={25} 
                className="deletar" 
                onClick={aoDeletar} 
            />
            <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt='mafe' />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}

export default User