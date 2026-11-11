import Inicio from "../../assets/img/inicio.png";
import Sobre from "../../assets/img/sobre.png";
import Projeto from "../../assets/img/projeto.png";
import Contato from "../../assets/img/contato.png"
import "../../assets/css/header.css";

export default function Header(){

    const Links = [
        {img: Inicio, span: "Home", link: "#inicio"},
        {img: Sobre, span: "Sobre", link: "#sobre"},
        {img: Projeto, span: "Projetos", link: "#projetos"},
        {img: Contato, span: "Contato", link: "#contato"}
    ]

    return (
        <>
            <header className="header">
                <div className="nav">
                    {Links.map((item) => (
                        <div className="navbar" key={item.link}>
                            <a href={item.link}>
                                <img src={item.img} alt={item.span}/>
                            </a>
                            <span>{item.span}</span>
                        </div>
                    ))}
                </div>
            </header>
        
        
        </>
    )
}