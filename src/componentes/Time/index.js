import User from '../User'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, 0.4) }

    return (
        props.users.length > 0 &&
        <section className="time" style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value,props.nome)}
                value={props.cor}
                type="color"
                className="input-cor"
            />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className="users">
                {props.users.map(user => {
                    return <User key={user.nome}
                        corDeFundo={props.cor}
                        nome={user.nome}
                        cargo={user.cargo}
                        imagem={user.imagem}
                        aoDeletar={props.aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Time