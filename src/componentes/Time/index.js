import User from '../User'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({time, users, aoDeletar, mudarCor, aoFav }) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.4) }
    return (
        users.length > 0 &&
        <section className="time" style={css}>
            <input onChange={evento => mudarCor(evento.target.value,time.id)}
                value={time.cor}
                type="color"
                className="input-cor"
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className="users">
                {users.map(user => {
                    return <User key={user.id}
                        user={user}
                        corDeFundo={time.cor}
                        aoDeletar={aoDeletar}
                        aoFav={aoFav} />
                })}
            </div>
        </section>
    )
}

export default Time