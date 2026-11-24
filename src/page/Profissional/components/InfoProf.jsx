import "../css/infoProf.css";
import InicioImg from "../../../assets/img/FundoProfissional/fundo-inicio.png";
export default function InfoProf(){

    return (
        <>
            <article className="infoProf">
                <div className="card1">
                    <h4>Desenvolvedor front-end</h4>
                    <h1>Giovani Manzatto</h1>
                    <p>Crio sites responsivos e interfaces <br />interativas com JavaScript e React.</p>
                    <div className="btns">
                        <button>Ver projetos <i className="ri-arrow-right-s-line"></i></button>
                        <button>GitHub <i className="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
                <div className="card2">
                    <img src={InicioImg} alt="" />
                </div>
            </article>
        
        </>
    )
}