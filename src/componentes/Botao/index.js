import './Botao.css'

const Botao = (props) =>{
    return(
        <button onClick={props.clique} className="botao" required={props.obrigatorio}>{props.children}</button>
    )
}
export default Botao