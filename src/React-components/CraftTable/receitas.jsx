import { useState } from "react";
import "../../assets/css/Receitas.css";
import Bussula from "../../assets/img/bussola.webp";
import diamente from "../../assets/img/diamante.webp";
import tijolo from "../../assets/img/bloco-tijolos.webp";
import redstone from "../../assets/img/redstone-1.webp";
import bancada from "../../assets/img/bancada-1.webp";
import { receitas } from "../../data/receitas";

const categorias = [
  { id: "todos", nome: "Todos", img: Bussula },
  { id: "destaques", nome: "Destaques", img: diamente },
  { id: "sites", nome: "Sites", img: tijolo },
  { id: "experimentos", nome: "Experimentos", img: redstone },
  { id: "aplicacoes", nome: "Aplicações", img: bancada },
];

export default function Receitas({ setClickMostrar, clickMostrar, setResultSite }) {
  const [abaAtiva, setAbaAtiva] = useState("todos");

  const receitasVisiveis = receitas.filter((receita) => {
    return abaAtiva === "todos" || receita.categoria === abaAtiva;
  });

  return (
    <section className="receitas">
      <nav className="receitas-abas" aria-label="Categorias de receitas">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            type="button"
            className={`receitas-aba ${
              abaAtiva === categoria.id ? "ativa" : ""
            }`}
            onClick={() => setAbaAtiva(categoria.id)}
            aria-pressed={abaAtiva === categoria.id}
            aria-label={categoria.nome}
            title={categoria.nome}
          >
            <img src={categoria.img} alt={categoria.nome} />
          </button>
        ))}
      </nav>

      <div className="receitas-painel">
        <h3>
          {categorias.find((categoria) => categoria.id === abaAtiva)?.nome}
        </h3>

        <div className="receitas-grade">
          {receitasVisiveis.map((receita) => (
            <div
              key={receita.id}
              className={clickMostrar?.id === receita.id ? "receitas-item active" : "receitas-item"}
              title={receita.span}
              onClick={() => (setClickMostrar(receita))}>
              <img src={receita.img} alt={receita.span} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
