import CardsEntrada from "./CardsEntrada"
import HeaderEntrada from "./HeaderEntrada"
import InfoEntrada from "./InfoEntrada"
import "./css/headerEntrada.css"
export default function EntradaPort({ setClickPort }){

    return (
        <>
            <section className="entradaPort">
                <div className="menu">
                    <HeaderEntrada />
                </div>
                <div className="inform">
                    <InfoEntrada />
                </div>
                <div className="cards-interativo">
                    <CardsEntrada setClickPort={setClickPort} />
                </div>
            </section>
        </>
    )
}