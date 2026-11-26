import { useState } from "react";
import seta from "../../assets/img/seta/seta.webp";
import setaEsquerda from "../../assets/img/seta/seta-esquerda.webp";
import setaLaranja from "../../assets/img/seta/seta-laranja-direita.webp";
import setaLaranjaEsquerda from "../../assets/img/seta/seta-laranja-esquerda.webp";
import Sign from "./sign";

export default function Livro() {
  const [clickPapel, setClickPapel] = useState(1);
  const [texto, setTexto] = useState([]);
  const [mouseMove, setMouseMove] = useState(false);
  const [mouseMoveE, setMouseMoveE] = useState(false);
  const [fechar, setFechar] = useState(true);
  const [abrirSign, setAbrirSign] = useState(false);
  const [inputSign, setInputSign] = useState("");

  return (
    <>
      {fechar && (
        <section className="contato">
          <article className="livro">
            <div className="papel-lib">
              <div className="block">
                {Array.from({ length: 10 }, (_, indice) => (
                  <div key={indice} className="bloco"></div>
                ))}
              </div>
              {Array.from({ length: clickPapel }, (_, indice) => (
                <div
                  className="papel"
                  key={indice}
                  hidden={indice != clickPapel - 1}
                >
                  <p>Page {clickPapel} of 10</p>
                  <textarea
                    id={`texto-${indice}`}
                    value={texto[indice] ?? ""}
                    onChange={(e) => {
                      const campo = e.target;
                      if (campo.scrollHeight > campo.clientHeight) return;
                      const novoTexto = campo.value;
                      setTexto((anteriores) => {
                        const copia = [...anteriores];
                        copia[indice] = novoTexto;
                        return copia;
                      });
                    }}
                  />
                  {clickPapel > 1 ? (
                    <img
                      className="esquerda"
                      src={mouseMoveE ? setaLaranjaEsquerda : setaEsquerda}
                      onMouseMove={() => setMouseMoveE(true)}
                      onMouseLeave={() => setMouseMoveE(false)}
                      onClick={() => setClickPapel((anterior) => anterior - 1)}
                    />
                  ) : null}
                  {clickPapel === 10 ? null : (
                    <img
                      className="direita"
                      src={mouseMove ? setaLaranja : seta}
                      alt=""
                      onMouseMove={() => setMouseMove(true)}
                      onMouseLeave={() => setMouseMove(false)}
                      onClick={() => setClickPapel((anterior) => anterior + 1)}
                    />
                  )}
                </div>
              ))}
              {abrirSign && (
                <Sign setInputSign={setInputSign} inputSign={inputSign} />
              )}
            </div>
          </article>
          <div className="btn">
            {abrirSign ? (
              <button disabled={inputSign === null}>
                Sign and Close
              </button>
            ) : (
              <button
                onClick={() => setAbrirSign((anterior) => !anterior)}
                disabled={inputSign === null ? true : false}
              >
                Sign
              </button>
            )}

            <button
              onClick={() => setFechar(false)}
              onChange={(e) => {
                const campo = e.target;
                if (campo.scrollHeight > campo.clientHeight) return;
                const novoTexto = campo.value;
                setTexto((anteriores) => {
                  const copia = [...anteriores];
                  copia[indice] = novoTexto;
                  return copia;
                });
              }}
            >
              Done
            </button>
          </div>
        </section>
      )}
    </>
  );
}
