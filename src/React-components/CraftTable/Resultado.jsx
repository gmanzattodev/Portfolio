import { useState } from "react";
import "../../assets/css/Resultados.css";
import Livro from "../../assets/img/livroCraft.webp";
import Receitas from "./receitas";
import { combinacoes } from "../../data/combinacoes";
import { receitas } from "../../data/receitas";

export default function Resultados({ setImg }) {
  const [aparecerReceitas, setAparecerReceitas] = useState(false);
  const [clickMostrar, setClickMostrar] = useState(null);
  const [slots, setSlots] = useState(Array(9).fill(null));

  function selecionarReceita(receita) {
  setClickMostrar(receita);

  const combinacao = combinacoes.find(
    (item) => item.projeto === receita.img
  );

  if (!combinacao) return;

  setSlots(
    combinacao.itens.map(
      (nome) => receitas.find((item) => item.span === nome) ?? null
    )
  );
}
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
          setClickMostrar={selecionarReceita}
          clickMostrar={clickMostrar}
        />
      )}
      <article className="Resultados">
        <div className="receitas-i">
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
        </div>
        <div className="seta"></div>
        <div className="resultadoCraft">
          {receitaEncontrada && (
            <a href={receitaEncontrada.link} style={receitaEncontrada.style} onClick={(e) => {setImg(receitaEncontrada.projeto), e.currentTarget.hidden = true}}>
              <img src={receitaEncontrada.projeto} alt="" onClick={(e) => {e.currentTarget.hidden = true}} />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
