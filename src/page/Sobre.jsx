import { useState } from "react";
import "../assets/css/Sobre.css";
import Modal from "../assets/components/Modal";

export default function Sobre() {
  const [text, setText] = useState("");
  const [inputDescricao, setInputDescrição] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [livros, setLivros] = useState([]);

  const cores = [
    "#FF595E",
    "#FF924C",
    "#FFCA3A",
    "#C5CA30",
    "#8AC926",
    "#1982C4",
    "#4267AC",
    "#6A4C93",
    "#B5179E",
    "#F72585",
  ];

  return (
    <>
      <section className="sobre">
        <article className="estante">
          <div className="blockLivro">
            {livros.map((item, indice) => (
              <div className="livros" key={indice} style={{ background: cores[indice], height: item.altura, fontSize: item.altura / 8, "--altura": `${item.altura / 10}px`}}>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="infoSobre">
          <h3>Sobre mim</h3>
          <h2>Minha criatividade tambem vive fora dos blocos.</h2>
          <p>
            Sou Giovani Manzatto, estudante de Segurança da Informação e
            desenvolvedor front-end em formação. Crio interfaces com HTML, CSS,
            JavaScript e React, explorando animações e interações que dão
            personalidade a cada projeto.
          </p>
          <p>
            Sou Giovani Manzatto, estudante de Segurança da Informação e
            desenvolvedor front-end em formação. Crio interfaces com HTML, CSS,
            JavaScript e React, explorando animações e interações que dão
            personalidade a cada projeto.
          </p>
          <button onClick={() => setModalAberto(true)}>
            Adicionar Historia
          </button>
        </article>

        {modalAberto && (
          <Modal
            onClose={() => setModalAberto(false)}
            setText={setText}
            text={text}
            setInputDescrição={setInputDescrição}
            inputDescricao={inputDescricao}
            setLivros={setLivros}
            livros={livros}
          />
        )}
      </section>
    </>
  );
}
