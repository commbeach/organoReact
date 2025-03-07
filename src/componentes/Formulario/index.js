import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [lane, setLane] = useState('')
    const [region, setRegion] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoCadastro({
            nome,
            titulo,
            imagem,
            lane,
            region
        })
        setNome('')
        setTitulo('')
        setImagem('')
        setLane('')
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
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    itens={props.lanes} 
                    label="Lane" 
                    obrigatorio={true}
                    valor={lane}
                    aoAlterado={valor => setLane(valor)}
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