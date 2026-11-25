import gmOS from "../../../assets/img/FundoProfissional/projeto-gm-os.webp";
import kombi from "../../../assets/img/FundoProfissional/projeto-kombi-os.webp";
import estudio from "../../../assets/img/FundoProfissional/projeto-site-estudio.webp";

export default function InfoProjetoProf() {
  const projetos = [
    {
      img: estudio,
      titulo: "Site de estudio",
      paragrafo: (
        <>
          Portfólio de fotografia com
          <br />
          agendamento pelo WhatsApp.
        </>
      ),
      button: "Ver projetos",
      icone: "ri-arrow-right-line",
    },
    {
      img: gmOS,
      titulo: "GM OS 2.0",
      paragrafo: (
        <>
          Desktop interativo com dock e
          <br />
          janelas no navegador
        </>
      ),
      button: "Ver projetos",
      icone: "ri-arrow-right-line",
    },
    {
      img: kombi,
      titulo: "Kombi OS",
      paragrafo: (
        <>
          Interface multimidia para um
          <br />
          projeto automotivo.
        </>
      ),
      button: "Ver projetos",
      icone: "ri-arrow-right-line",
    },
  ];

  return (
    <>
      <article className="InfoProjeto">
        <h2>Projetos em destaque</h2>
        <div className="gridProjetos">
          {projetos.map((projeto, index) => (
            <div className="cardProjetos" key={index}>
              <img src={projeto.img} alt={projeto.paragrafo} />
              <div className="infoProjeto">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.paragrafo}</p>
                <button>
                  {projeto.button}
                  <i className={projeto.icone}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
