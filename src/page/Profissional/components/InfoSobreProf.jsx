import sobreImg from "../../../assets/img/FundoProfissional/fundo-sobre.webp";
import "../css/infoSobreProf.css";
export default function InfoSobreProf(){
    

    return(
        <>
            <article className="InfoSobreProf">
                    <div className="image-info">
                        <img src={sobreImg} alt="sobre imagem de um computador" />
                    </div>
                    <div className="informacao-sobre">
                        <h2>Sobre mim</h2>
                        <p>Estudo Segurança da informação na Fatec Americana e <br />desenvolvo projetos front-end com JavaScript e React.</p>
                        <div className="flex-info">
                            <div className="flex">
                                <h3>Formação</h3>
                                <p>Segurança da informação - Fatec Americana</p>
                            </div>
                            <div className="flex">
                                <h3>Interesses</h3>
                                <p>Interfaces web, Linux, Sistemas embarcados</p>
                            </div>
                        </div>
                        <button>Conhecer meus projetos <i className="ri-arrow-right-line"></i></button>
                    </div>
            </article>
        
        
        </>
    )
}