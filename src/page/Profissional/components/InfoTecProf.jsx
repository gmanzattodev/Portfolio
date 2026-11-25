import gsap from "../../../assets/img/FundoProfissional/gsap.webp";
import html from "../../../assets/img/FundoProfissional/html.webp";
import css from "../../../assets/img/FundoProfissional/css.webp";
import JavaScript from "../../../assets/img/FundoProfissional/js.webp";
import react from "../../../assets/img/FundoProfissional/react.webp";
import Git from "../../../assets/img/FundoProfissional/Git.webp";

export default function InfoTecProf(){

    const Linguagens = [
        {img: html, titulo: "HTML", paragrafo: "Estrutura semântica", progress: 85},
        {img: css, titulo: "CSS", paragrafo: "Estilos e responsividade", progress: 70},
        {img: JavaScript, titulo: "JavaScript", paragrafo: "Lógica e interações", progress: 60},
        {img: react, titulo: "React", paragrafo: "Componentes e estado", progress: 50},
        {img: gsap, titulo: "GSAP", paragrafo: "Animação de interface", progress: 45},
        {img: Git, titulo: "Git", paragrafo: "Controle de versões", progress: 20}
    ]
    
    return (
        <>
            <article className="CardTec">
                <div className="infoTec">
                    <h3>Minha stack front-end</h3>
                    <p>As ferramentas que uso para criar sites responsivos, desenvolver interfaces interativas e versionar meus projetos.</p>
                </div>
                <div className="gridTec">
                    {Linguagens.map((item, index) => (
                        <div className="cardsTec" key={index}>
                            <img src={item.img} alt={item.paragrafo} />
                            <div className="informTec">
                                <h3>{item.titulo}</h3>
                                <p>{item.paragrafo}</p>
                            </div>
                            <div className="progresso">
                                <progress value={item.progress} className="barra-progresso" max={100}  aria-label="Nivel de HTML" />
                                <span>{item.progress}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        
        </>
    )
}