import { useState } from "react";
import "../../assets/css/Receitas.css";
import Bussula from "../../assets/img/bussola.webp";
import diamente from "../../assets/img/diamante.webp";
import tijolo from "../../assets/img/bloco-tijolos.webp";
import redstone from "../../assets/img/redstone-1.webp";
import bancada from "../../assets/img/bancada-1.webp";

const categorias = [
  { id: "todos", nome: "Todos", img: Bussula },
  { id: "destaques", nome: "Destaques", img: diamente},
  { id: "sites", nome: "Sites", img: tijolo },
  { id: "experimentos", nome: "Experimentos", img: redstone },
  { id: "aplicacoes", nome: "Aplicações", img: bancada },
];

const receitas = [
  { id: 1, nome: "Tábuas", categoria: "construcao", icone: "🪵" },
  { id: 2, nome: "Porta", categoria: "construcao", icone: "🚪" },
  { id: 3, nome: "Espada", categoria: "equipamentos", icone: "⚔️" },
  { id: 4, nome: "Picareta", categoria: "equipamentos", icone: "⛏️" },
  { id: 5, nome: "Cama", categoria: "decoracao", icone: "🛏️" },
  { id: 6, nome: "Flor", categoria: "natureza", icone: "🌻" },
];

export default function Receitas() {
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
              className="receitas-item"
              title={receita.nome}
            >
              {receita.icone}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}