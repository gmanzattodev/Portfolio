import { useState } from "react";
import "../css/CardPerfil.css";


export default function CardPerfil() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [ativo, setAtivo] = useState(false);

  function mouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.ClientY - rect.top,
    });
  }

  return (
    <>
      <div className="card">
        <div className="personagem" onMouseMove={moverMouse} onMouseEnter={() => setAtivo(true)} onMouseLeave={() => setAtivo(false)}>
          <img src="/pessoa.png" className="imagem" />

          <img src="/aranha.png" className="imagem transformacao" style={{  maskImage: ativo  ? `radial-gradient(circle 100px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)` : "none", WebkitMaskImage: ativo ? `radial-gradient(circle 100px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)` : "none", }} />
        </div>
        <h4>Giovani Manzatto</h4>
        <p>Front End</p>
        <p>09/11/2026</p>
      </div>
    </>
  );
}
