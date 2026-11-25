export default function CardsEntrada({ setClickPort, setClickProf, setClickEntrada }){
    return (
        <>
            <article className="cardsGrid">
                <div className="cards profissional">
                    <div className="infoCards">
                        <h2>Portfólio Profissional</h2>
                        <p>Projetos, habilidades e contato.</p>
                        <button onClick={() => (setClickProf(true), setClickEntrada(false))}>Ver portólio profissional <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                <div className="cards mine">
                    <div className="infoCards">
                        <h2>Portfólio interativo</h2>
                        <p>Combine itens na bancada para revelar meus projetos.</p>
                        <button onClick={() => (setClickPort(true),setClickEntrada(false))}>Explorar portfólio interativo <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </article>
        
        </>
    )
}