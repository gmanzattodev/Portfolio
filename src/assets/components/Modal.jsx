import "../css/modal.css";


export default function Modal({ onClose, setText, text, setInputDescrição, inputDescricao, Livros }) {
  return (
    <>
      <article className="modal">
        <div className="infoModal">
          <div className="info">
              <h3>Monte uma historia</h3>
              <p>
                Cada historia é contado com um momento, no Minecraft isso é
                considerado um livro de marcação.
              </p>
          </div>
          <button onClick={onClose}>Fechar</button>
        </div>
        <form>
          <div className="input-box">
            <label htmlFor="text">Nome</label>
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

          <button type="submit">Concluir História</button>
        </form>
      </article>
    </>
  );
}
