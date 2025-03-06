import './User.css'

const User = ({nome, imagem, cargo, corDeFundo}) => {
    return(
        <div className="user">
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