import imgCont from "../../../assets/img/FundoProfissional/fundo-contato.webp"

export default function InfoContatoProf() {


    return (
        <>
            <article className="InfoContato">
                <div className="containerCont">
                    <div className="informContato">
                        <h2>Vamos conversar?</h2>
                        <p>Busco um oportunidade de estagio em <br />desenvolvimento front-end.</p>
                        <div className="buttons">
                            <button>
                                <i className="ri-linkedin-fill"></i>
                                Linkedln
                                <i className="ri-arrow-right-up-line"></i>
                            </button>
                            <button>
                                <span>
                                    <i className="ri-github-fill"></i>
                                    GitHub
                                </span>
                                <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </div>
                        <span className="cidade">Americana, Campinas e Santa Bárbara d´Oeste - SP</span>
                    </div>
                    <div className="imgCont">
                        <img src={imgCont} alt="envolepe" />
                    </div>
                </div>
                <footer>
                    <hr />
                    <p>Giovani Manzatto</p>
                </footer>
            </article>
        
        </>
    )
}