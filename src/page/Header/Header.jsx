import Inicio from "../../assets/img/GramaPequeno.png";
import Sobre from "../../assets/img/sobre.png";
import Projeto from "../../assets/img/bancada-1.webp";
import Contato from "../../assets/img/contato.png"
import "../../assets/css/header.css";
import { useEffect, useState } from "react";

export default function Header({ BlocosGrama }){
    const [slot, setSlot] = useState(0)

    

    function detectarTeclado(event){
        switch(event.key){
            case "1":
                setSlot(1)
                break
            case "2":
                setSlot(2)
                break
            case "3":
                setSlot(3)
                break
            default:
                console.log("Nenhuma das alternativas")
        }
    }

    const Links = [
        {img: Inicio, span: "Home", link: "#inicio", number: BlocosGrama},
        {img: Sobre, span: "Sobre", link: "#sobre"},
        {img: Projeto, span: "Projetos", link: "#projetos"},
    ]
    useEffect(() => {
        window.addEventListener("keydown", detectarTeclado)

        return () => {
            window.removeEventListener("keydown", detectarTeclado)
        }
    }, [])

    useEffect(() => {
        if(slot === 0) return;
        const destino = Links[slot - 1].link
        document.querySelector(destino)?.scrollIntoView({
            behavior: "smooth"
        })
    }, [slot])

    

    return (
        <>
            
            <header className="header">
                <div className="nav">
                    {Links.map((item, indice) => (
                        <div className={slot === indice + 1 ? "navbar ativo" : "navbar"} key={item.link} onClick={() => setSlot(indice + 1)}>
                            <a href={item.link}>
                                <img src={item.img} alt={item.span} />
                            </a>
                            <span>{item.span}</span>
                            <p>{item.number}</p>
                        </div>
                    ))}
                </div>
            </header>
        
        
        </>
    )
}