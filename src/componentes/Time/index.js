import User from '../User'
import './Time.css'

const Time = (props) =>{
    const css = { backgroundColor: props.corSecundaria }

    return(
        props.users.length > 0 &&
        <section className="time" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="users">
                {props.users.map(user => <User nome={user.nome} cargo={user.cargo}/>)}
            </div>
        </section>
    )
}

export default Time