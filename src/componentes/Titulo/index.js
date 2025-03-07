import Botao from '../Botao'
import './Titulo.css'

const Titulo = (props) =>{
    return(
        <section className="titulo">
            <h3>{props.children}</h3>
            <div className="botao-container">
                <Botao clique={props.lane}>Filtrar por Lane</Botao>
                <Botao clique={props.regiao}>Filtrar por Região</Botao>
            </div>
        </section>

        
    )
}
export default Titulo