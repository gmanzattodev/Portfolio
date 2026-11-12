import { useState } from "react";
import Grama from "../img/GramaPequeno.png";
export default function InfoHero({ setBlocosGrama, setBlock1, block1 }) {
  return (
    <>
      <article className="InfoHero">
        <h3>Criatividade para imaginar. Código para realizar.</h3>
        <h1>
          Construindo ideias,<span>bloco por bloco</span>
        </h1>
        <p>
          Desenvolvo interfaces com React e JavaScript, <br /> unindo atenção
          aos detalhes e vontade <br /> de experimentar. Explore meus projetos
          <br /> e acompanhe o que estou construindo.
        </p>
        <button>
          Explorar Projetos
          <img
            onClick={() => (
              setBlocosGrama((anterior) => anterior + 1),
              setBlock1((anterior) => !anterior)
            )}
            src={Grama}
            alt="Bloco de grama"
            className={block1 ? "img ativo" : "img"}
          />
        </button>
      </article>
    </>
  );
}
