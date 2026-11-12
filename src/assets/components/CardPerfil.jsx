import { useEffect, useState } from "react";
import "../css/CardPerfil.css";
import personagem from "../img/personagem.webp";
import pessoa from "../img/i.jpeg";
import Grama from "../img/GramaPequeno.png";
import gsap from "gsap";

export default function CardPerfil({ setBlocosGrama, setBlock2, block2, setBlock3, block3 }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ativo, setAtivo] = useState(false);

  function mouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card", {
        y: -500,
        duration: 4,
        ease: "back.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="card">
        <img
          onClick={() => (
            setBlocosGrama((anterior) => anterior + 1),
            setBlock3((anterior) => !anterior)
          )}
          src={Grama}
          alt="Bloco de grama"
          className={block3 ? "block ativo" : "block"}
        />
        <div
          className="personagem"
          onMouseMove={mouseMove}
          onMouseEnter={() => setAtivo(true)}
          onMouseLeave={() => setAtivo(false)}
        >
          <img src={pessoa} className="imagem" />

          <img
            src={personagem}
            alt=""
            className="imagem transformacao"
            style={{
              opacity: ativo ? 1 && 2 : 0,
              maskImage: `radial-gradient(
              circle 200px at ${mouse.x}px ${mouse.y}px,
              black 0%,
              transparent 100%)`,
              WebkitMaskImage: `radial-gradient(
              circle 100px at ${mouse.x}px ${mouse.y}px,
              black 60%,
              transparent 100%)`,
            }}
          />
        </div>
        <h4>Giovani Manzatto</h4>
        <p>
          Front End{" "}
          <img
            onClick={() => (
              setBlocosGrama((anterior) => anterior + 1),
              setBlock2((anterior) => !anterior)
            )}
            src={Grama}
            alt="Bloco de grama"
            className={block2 ? "img ativo" : "img"}
          />
        </p>
        <p>09/11/2026</p>
      </div>
    </>
  );
}
