import { useState } from "react";
import "../assets/css/Projetos.css";
import Livro from "../assets/img/livroCraft.webp";
import InfoProjetos from "../assets/components/InfoProjetos";
import Resultados from "../React-components/CraftTable/Resultado";

export default function Projetos({ setImg }) {
  const [clickLivro, setClickLivro] = useState(false);
  const [aparecerCraft, setAparecerCraft] = useState(false);
  const [livroAparecer, setLivroAparecer] = useState(false);

  const tamanho = 50
  const maxTamanho = 100

  return (
    <>
      <section className="projetos" id="projetos">
        <div className="mesa">
          <InfoProjetos setLivroAparecer={setLivroAparecer} />
          <div className="craft">
            <div className="clickbtn">
              {livroAparecer && (
                <button
                  className={`${clickLivro ? "craftTable ativo" : "craftTable"}`}
                  onClick={() => (setClickLivro(true), setAparecerCraft(true))}
                  style={{ width: `${maxTamanho - 1}px`}}
                >
                  <img src={Livro} alt="Livro" />
                </button>
              )}
            </div>
          </div>

          

          {aparecerCraft && <Resultados setImg={setImg} />}
        </div>
      </section>
    </>
  );
}
