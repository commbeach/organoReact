import './Titulo.css'

const Titulo = (props) =>{
    return(
        <div className="titulo">
            <h3>{props.children}</h3>
        </div>
        
    )
}
export default Titulo