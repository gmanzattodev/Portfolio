import { useState } from "react";
import "../../assets/css/Resultados.css";
import Livro from "../../assets/img/livroCraft.webp";
import Receitas from "./receitas";

export default function Resultados() {
  const [aparecerReceitas, setAparecerReceitas] = useState(false);

  return (
    <div className="craft-layout">
      {aparecerReceitas && <Receitas />}
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
            {Array.from({ length: 9 }, (_, i) => (
              <div className="slot-item" key={i}>
                
              </div>
            ))}
          </div>
        </div>
        <div className="seta"></div>
        <div className="resultadoCraft"></div>
      </article>
    </div>
  );
}
