import { useEffect, useState } from "react"
import "./css/headerProf.css";

const midia = "(width < 1200px)"
export default function HeaderProf(){
    const [titulo, setTitulo] = useState(false)
    const [headerAni, setHeaderAni] = useState(false)
    const [telaPequena, setTelaPequena] = useState(
        () => window.matchMedia(midia).matches
    );
    const [clickMenu, setClickMenu] = useState(false)

    useEffect(() => {
        function aparecer(){
            setTimeout(() => {
                setHeaderAni(true)
                setTimeout(() => {
                    setTitulo(true)
                }, 2000);
            }, 2000);
        }

        const media = window.matchMedia(midia)

        function atualizarTela(evento){
            setTelaPequena(evento.matches)
        }
        
        media.addEventListener("change", atualizarTela)
        aparecer()
        window.addEventListener("resize", aparecer)

        return () => (
            window.removeEventListener("resize", aparecer),
            window.removeEventListener("change", atualizarTela)
        )

    }, [])

    return(
        <>
            <header className={headerAni ? "headerProf ativo" : "headerProf"}>
                <h3>{titulo ? "GM Developer" : "GM"}</h3>

                
                <div className="PequenoMidia">
                    <i className={`${telaPequena ? "ri-menu-line" : ""}`} onClick={() => setClickMenu(anterior => !anterior)}></i>
                    <nav className={`${telaPequena ? "navbarProf none" : "navbarProf"} ${clickMenu ? "navbarProf aparecer" : "navbarProf"}`}>
                        <a href="#heroProf">Inicio</a>
                        <a href="#sobreProf">Sobre</a>
                        <a href="#TecProf">Tecnologias</a>
                        <a href="#projetoProf">Projetos</a>
                        <a href="#contatoProf">Contato</a>
                    </nav>
                </div>
            </header>
        
        </>
    )
}