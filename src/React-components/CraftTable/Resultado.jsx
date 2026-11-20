import { useState } from "react";
import "../../assets/css/Resultados.css";
import Livro from "../../assets/img/livroCraft.webp";
import Receitas from "./receitas";
import { combinacoes } from "../../data/combinacoes";

export default function Resultados() {
  const [aparecerReceitas, setAparecerReceitas] = useState(false);
  const [clickMostrar, setClickMostrar] = useState(null);
  const [slots, setSlots] = useState(Array(9).fill(null));

  const receitaEncontrada = combinacoes.find((combinacao) =>
    combinacao.itens.every(
      (textoEsperado, i) => (slots[i]?.span ?? null) === textoEsperado,
    ),
  );
  function colocarItem(indice) {
    if (!clickMostrar) return;

    setSlots((anteriores) =>
      anteriores.map((item, i) => (i === indice ? clickMostrar : item)),
    );
  }
  function removerItem(indice) {
    setSlots((anteriores) =>
      anteriores.map((item, i) => (i === indice ? null : item)),
    );
  }

  return (
    <div className="craft-layout">
      {aparecerReceitas && (
        <Receitas
          setClickMostrar={setClickMostrar}
          clickMostrar={clickMostrar}
        />
      )}
      <article className="Resultados">
        <div
          className="receitas-r"
          onClick={() => setAparecerReceitas((anterior) => !anterior)}
        >
          <img src={Livro} alt="" />
          <span>Descobrir sites</span>
        </div>
        <div className="container">
          <div className="slots-r">
            {Array.from({ length: 9 }, (_, i) => (
              <div className="slot" key={i}></div>
            ))}
          </div>
          <div className="slots-i">
            {slots.map((imagem, i) => (
              <div
                className="slot-item"
                key={i}
                onClick={() => colocarItem(i)}
                onContextMenu={(event) => {
                  event.preventDefault();
                  removerItem(i);
                }}
              >
                {imagem && <img src={imagem.img} alt={imagem.span} />}
              </div>
            ))}
          </div>
        </div>
        <div className="seta"></div>
        <div className="resultadoCraft">
          {receitaEncontrada && (
            <a href={receitaEncontrada.link} style={receitaEncontrada.style}>
              <img src={receitaEncontrada.projeto} alt="" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
