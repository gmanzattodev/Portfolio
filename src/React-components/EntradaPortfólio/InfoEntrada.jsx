import react from "../../assets/img/imgEntrada/react.webp"
import gsap from "../../assets/img/imgEntrada/gsap.webp"
import Javascript from "../../assets/img/imgEntrada/js.webp"
import css from "../../assets/img/imgEntrada/css.webp"
import "./css/headerEntrada.css"
import { useEffect, useState } from "react"

export default function InfoEntrada(){
    const [aparecer, setAparecer] = useState(false)

    useEffect(() => {
        function aparecer(){
            setTimeout(() => {
                setAparecer(true)
            }, 3000);
        }
        aparecer()
        window.addEventListener("resize", aparecer)

        return () => (
            window.removeEventListener("resize", aparecer)
        )
    }, [])

    const tecnologias = [
        {img: react, paragrafo: "React"},
        {img: Javascript, paragrafo: "JavaScript"},
        {img: css, paragrafo: "CSS"},
        {img: gsap, paragrafo: "GSAP"}
    ]

    return(
        <>
            <article className="infoEntrada">
                <div className="info">
                    <h1>Giovani Manzatto</h1>
                    <h3>Desenvolvedor front-end</h3>
                    <p>Crio sites e interfaces interativas com React.</p>
                </div>
                <div className={aparecer ? "tecnologias ativo" : "tecnologias"}>
                    <p>Tecnologias</p>
                    <div className="gridTec">
                        {tecnologias.map((item, indice) => (
                            <div className="iconTec" key={indice}>
                                <img src={item.img} alt={item.paragrafo} />
                                <p>{item.paragrafo}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        
        </>
    )
}