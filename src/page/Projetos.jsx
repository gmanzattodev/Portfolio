import { useEffect, useState } from "react";
import "../assets/css/Projetos.css";
import Livro from "../assets/img/livroCraft.webp";
import Bau from "../assets/img/bau.webp";
import bancada from "../assets/img/bancada-1.webp";
import bigorna from "../assets/img/bigorna.webp";
import picareta from "../assets/img/picareta.webp";
import comando from "../assets/img/bloco-de-comando.webp";
import fornalha from "../assets/img/fornalha.webp";
import trilho from "../assets/img/trilho.webp";
import redstone from "../assets/img/redstone-1.webp";
import InfoProjetos from "../assets/components/InfoProjetos";
import Resultados from "../React-components/CraftTable/Resultado";

export default function Projetos() {
  const [clickLivro, setClickLivro] = useState(false);
  const [variasAnimacao, setVariasAnimacao] = useState("parado");
  const [aparecerCraft, setAparecerCraft] = useState(false)
  const [livroAparecer, setLivroAparecer] = useState(false)

  const animacao = [
    { icone: Bau, direcao: "esquerdaCima" },
    { icone: bancada, direcao: "centroCima" },
    { icone: bigorna, direcao: "direitaCima" },
    { icone: picareta, direcao: "esquerda" },
    { icone: comando, direcao: "direita" },
    { icone: fornalha, direcao: "esquerdaBaixo" },
    { icone: trilho, direcao: "centroBaixo" },
    { icone: redstone, direcao: "direitaBaixo" },
  ];

  const CraftProjetos = [];

  return (
    <>
      <section className="projetos" id="projetos">
        <div className="mesa">
          <span className="canto superior-esquerdo" />
          <span className="canto superior-direito" />
          <span className="canto inferior-esquerdo" />
          <span className="canto inferior-direito" />

          <div className="craft"></div>
          <div className="itens-craft">
            {animacao.map((item, indice) => (
              <div
                className={`item-animacao ${item.direcao} ${variasAnimacao}`}
                key={indice}
                onAnimationEnd={(event) => {
                  if (event.target !== event.currentTarget) return;

                  const name = event.animationName;

                  if (
                    variasAnimacao === "aparecer" &&
                    name === "aparecer" &&
                    indice === animacao.length - 1
                  ) {
                    setVariasAnimacao("juntar");
                  }

                  if (indice !== 0) return;

                  if (variasAnimacao === "juntar" && name === "juntar") {
                    setVariasAnimacao("tremer");
                  }
                  if (variasAnimacao === "tremer" && name === "tremer") {
                    setVariasAnimacao("sumir");
                  }
                  if(variasAnimacao === "sumir" && name === "sumir") {
                    setAparecerCraft(true)
                    setVariasAnimacao("aumentar")
                  }
                }}
              >
                <img src={item.icone} alt="Itens" />
              </div>
            ))}
          </div>

          <div className="clickbtn">
            <button
              className={`${clickLivro ? "craftTable ativo" : "craftTable"} ${variasAnimacao === "tremer" ? "tremer" : ""} ${variasAnimacao === "sumir" ? "sumir" : ""} ${variasAnimacao === "aumentar" ? "sumir" : ""} ${livroAparecer ? "aparecer" : ""}`}
              onClick={() => (
                setClickLivro(true),
                setVariasAnimacao("aparecer")
              )}
            >
              <img src={Livro} alt="Livro" />
            </button>
          </div>

          <InfoProjetos setLivroAparecer={setLivroAparecer}/>

          {aparecerCraft && <Resultados />}
        </div>
      </section>
    </>
  );
}
