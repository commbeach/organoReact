import User from '../User'
import './Time.css'

const Time = (props) =>{
    const css = { backgroundColor: props.corSecundaria }

    return(
        props.users.length > 0 &&
        <section className="time" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="users">
                {props.users.map(user => <User key={user.nome} corDeFundo={props.corPrimaria} nome={user.nome} cargo={user.cargo} imagem={user.imagem}/>)}
            </div>
        </section>
    )
} 

export default Time