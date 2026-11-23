export default function Sign({ setInputSign, inputSign }) {
  return (
    <>
      <article className="sign">
        <div className="block">
          {Array.from({ length: 10 }, (_, indice) => (
            <div key={indice} className="bloco"></div>
          ))}
        </div>
        <div className="marcacao">
            <h4>Enter Book Title:</h4>
            <input type="text" onChange={(e) => setInputSign(e.target.value)} value={inputSign} />
            <p className="nome">by GiovaniDev</p>
            <p className="descricao">Note! When you sign <br />the book, it will no <br />longer be editable.</p>
        </div>
      </article>
    </>
  );
}
