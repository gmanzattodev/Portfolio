import "../css/InfoProjetos.css";

export default function InfoProjetos({ setLivroAparecer }){


    return (
        <>
            <article className="infoProjetos">
                <h4>Criatividade em construção</h4>
                <h2>Cada projeto, uma nova criação.</h2>
                <p>Ideias ganham forma com código, criatividade e atenção aos detalhes. Conheça meus projetos clicando no botão abaixo e, depois, no livro. Explore o que já construí!</p>
                <button onClick={() => setLivroAparecer(true)}>Explorar projetos</button>
            </article>
        
        </>
    )
}