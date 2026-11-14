import { useEffect, useState } from "react";
import "../assets/css/Projetos.css";
import Livro from "../assets/img/livroCraft.webp";
import Bau from "../assets/img/bau.webp";
import bancada from "../assets/img/bancada.webp";
import bigorna from "../assets/img/bigorna.webp";
import picareta from "../assets/img/picareta.webp";
import comando from "../assets/img/bloco-de-comando.webp";
import fornalha from "../assets/img/fornalha.webp";
import trilho from "../assets/img/trilho.webp";
import redstone from "../assets/img/redstone.webp";

export default function Projetos() {
  const [abrirCraft, setAbrirCraft] = useState(false);
  const [clickLivro, setClickLivro] = useState(false);
  const [aparecerAnimacao, setAparecerAnimacao] = useState(false);

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
                className={`item-animacao ${item.direcao} ${
                  aparecerAnimacao ? "ativo" : ""
                }`} 
                key={indice}
              >
                <img src={item.icone} alt="Itens" />
              </div>
            ))}
          </div>

          <div className="clickbtn">
            <button
              className={clickLivro ? "craftTable ativo" : "craftTable"}
              onClick={() => (
                setAbrirCraft(true),
                setClickLivro(true),
                setAparecerAnimacao(true)
              )} 
            >
              <img src={Livro} alt="Livro" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
