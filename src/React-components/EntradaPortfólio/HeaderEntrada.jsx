import { useEffect, useState } from "react";
import "./css/headerEntrada.css"
export default function headerEntrada() {
  const [titulo, setTitulo] = useState(false);

  useEffect(() => {
    function aparecer() {
      setTimeout(() => {
        setTitulo(true);
      }, 3000);
    }

    aparecer();
    window.addEventListener("resize", aparecer);

    return () => window.removeEventListener("resize", aparecer);
  }, []);

  return (
    <>
      <header className={titulo ? "headerEntrada ativo" : "headerEntrada"}>
        <h2>{titulo ? "GM Developer" : "GM"}</h2>
        <nav className="navbarEntrada">
          <div className="icone">
            <i className="ri-github-fill"></i>
            <p>GitHub</p>
          </div>
          <hr />
          <div className="icone">
            <i className="ri-mail-line"></i>
            <p>Contato</p>
          </div>
        </nav>
      </header>
    </>
  );
}