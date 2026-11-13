import { useState } from "react";
import "../assets/css/Sobre.css";
import Modal from "../assets/components/Modal";

export default function Sobre() {
    const [text, setText] = useState("")
    const [inputDescricao, setInputDescrição] = useState("")
    const [modalAberto, setModalAberto] = useState(false)

    const Livros = [
        {titulo: "Sobre",}
    ]

    return (
        <>
            <section className="sobre">
                <article className="estante">
                    <div className="blockLivro">
                        
                    </div>
                </article>
                <article className="infoSobre">
                    <h3>Sobre mim</h3>
                    <h2>Minha criatividade tambem vive fora dos blocos.</h2>
                    <p>Sou Giovani Manzatto, estudante de Segurança da Informação e desenvolvedor front-end em formação. Crio interfaces com HTML, CSS, JavaScript e React, explorando animações e interações que dão personalidade a cada projeto.</p>
                    <p>Sou Giovani Manzatto, estudante de Segurança da Informação e desenvolvedor front-end em formação. Crio interfaces com HTML, CSS, JavaScript e React, explorando animações e interações que dão personalidade a cada projeto.</p>
                    <button onClick={() => setModalAberto(true)}>Adicionar Historia</button>
                </article>

                {modalAberto && (
                    <Modal onClose={() => setModalAberto(false)} setText={setText} text={text} setInputDescrição={setInputDescrição} inputDescricao={inputDescricao} Livros={Livros} />
                )}
            </section>
        
        </>

    )
}