import './Botao.css'

const Botao = (props) =>{
    return(
        <button className="botao" required={props.obrigatorio}>{props.children}</button>
    )
}
export default Botao