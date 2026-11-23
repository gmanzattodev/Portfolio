export default function CardsEntrada({ setClickPort }){
    return (
        <>
            <article className="cardsGrid">
                <div className="cards profissional">
                    <h2>Portfólio Profissional</h2>
                    <p>Projetos, habilidades e contato.</p>
                    <button>Ver portólio profissional <i className="ri-arrow-right-line"></i></button>
                </div>
                <div className="cards mine">
                    <h2>Portfólio interativo</h2>
                    <p>Combine itens na bancada para revelar meus projetos.</p>
                    <button onClick={() => setClickPort(true)}>Explorar portfólio interativo <i className="ri-arrow-right-line"></i></button>
                </div>
            </article>
        
        </>
    )
}