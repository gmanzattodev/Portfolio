import { useEffect, useState } from "react";
import "./css/headerProf.css";

const midia = "(width < 1200px)";
export default function HeaderProf({ setProfActive, profActive }) {
  const [titulo, setTitulo] = useState(false);
  const [headerAni, setHeaderAni] = useState(false);
  const [telaPequena, setTelaPequena] = useState(
    () => window.matchMedia(midia).matches,
  );
  const [clickMenu, setClickMenu] = useState(false);

  const links = [
    { id: "heroProf", texto: "Início" },
    { id: "sobreProf", texto: "Sobre" },
    { id: "TecProf", texto: "Tecnologias" },
    { id: "projetoProf", texto: "Projetos" },
    { id: "contatoProf", texto: "Contato" },
  ];

  useEffect(() => {
    function aparecer() {
      setTimeout(() => {
        setHeaderAni(true);
        setTimeout(() => {
          setTitulo(true);
        }, 2000);
      }, 2000);
    }

    const media = window.matchMedia(midia);

    function atualizarTela(evento) {
      setTelaPequena(evento.matches);
    }

    media.addEventListener("change", atualizarTela);
    aparecer();
    window.addEventListener("resize", aparecer);

    return () => (
      window.removeEventListener("resize", aparecer),
      window.removeEventListener("change", atualizarTela)
    );
  }, []);

  const classeMenu = telaPequena ? (clickMenu ? "aparecer" : "none") : "";
  return (
    <>
      <header className={headerAni ? "headerProf ativo" : "headerProf"}>
        <h3>{titulo ? "GM Developer" : "GM"}</h3>

        <div className="PequenoMidia">
          <i
            className={`${telaPequena ? "ri-menu-line" : ""}`}
            onClick={() => setClickMenu((anterior) => !anterior)}
          ></i>
          <nav className={`navbarProf ${classeMenu}`}>
            {links.map(({ id, texto }) => (
              <a
                key={id}
                href={`#${id}`}
                className={profActive === id ? "ativo" : ""}
                onClick={() => setProfActive(id)}
              >
                {texto}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
