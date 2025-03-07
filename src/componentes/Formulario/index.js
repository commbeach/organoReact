import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [region, setRegion] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoCadastro({
            nome,
            cargo,
            imagem,
            time,
            region
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setRegion('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Champion</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true} 
                    placeholder="Digite o Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    label="Título" 
                    obrigatorio={true} 
                    placeholder="Digite o Título" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    itens={props.times} 
                    label="Lane" 
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <ListaSuspensa 
                    itens={props.regions} 
                    label="Região" 
                    obrigatorio={true}
                    valor={region}
                    aoAlterado={valor => setRegion(valor)}
                />

                <Botao>Cria Card</Botao>
            </form>
        </section>
    )
}
export default Formulario;