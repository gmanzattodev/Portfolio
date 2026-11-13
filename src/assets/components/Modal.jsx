import { useEffect } from "react";
import "../css/modal.css";


export default function Modal({ onClose, setText, text, setInputDescrição, inputDescricao, setLivros, livros }) {
  
  
  function salvarHistoria(event){
    event.preventDefault()

    if(!text.trim() || !inputDescricao.trim()) return;

    setLivros((anteriores) => [
      ...anteriores,
      {
        titulo: text.trim(),
        descricao: inputDescricao.trim(),
        altura: Math.floor(Math.random() * 81) + 70
      }
    ])

    setText("")
    setInputDescrição("")
    onClose()
  }
  

  useEffect(() => {

    function mostrar(){
      console.log(livros)
    }

    mostrar()
    window.addEventListener("resize", mostrar)


    return () => (
      window.removeEventListener("resize", mostrar)
    )
  }, [])
  
  return (
    <>
      <article className="modal">
        <div className="infoModal">
          <div className="info">
              <p>Criar história</p>
          </div>
          <button onClick={onClose}><i className="ri-close-line"></i></button>
        </div>
        <form onSubmit={salvarHistoria}>
          <div className="input-box">
            <label htmlFor="text">Nome do livro</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Digite Nome do livro"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="paragrafo">Descrição</label>
            <textarea
              name="texto"
              id="paragrafo"
              placeholder="Digite sua História"
              value={inputDescricao}
              onChange={(event) => setInputDescrição(event.target.value)}
            ></textarea>
          </div>
          <div className="btn">
            <button type="button" onClick={onClose} className="cancelar">Cancelar</button>
            <button type="submit" className="concluido">Concluir história</button>
          </div>
          
        </form>
      </article>
    </>
  );
}
