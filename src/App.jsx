import "./App.css";
import Hero from "./page/hero/Hero";
import Header from "./page/Header/Header";
import { useState } from "react";
import Sobre from "./page/Sobre";
import Mao from "./assets/img/mao.webp";
import Projetos from "./page/Projetos";
import livro from "./assets/img/contato.png";
import Livro from "./React-components/livros/livro";
import EntradaPort from "./React-components/EntradaPortfólio/EntradaPort";
import HeroProf from "./page/Profissional/HeroProf";
import HeaderProf from "./page/Profissional/HeaderProf";
import "./page/Profissional/css/headerProf.css";


function App() {
  const [BlocosGrama, setBlocosGrama] = useState(null);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);
  const [img, setImg] = useState(Mao);
  const [clickPort, setClickPort] = useState(false);

  return (
    <>
      {clickPort && (
        <main
          className="fundoPrincipal"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <Header BlocosGrama={BlocosGrama} />
          <Hero
            setBlocosGrama={setBlocosGrama}
            block1={block1}
            setBlock1={setBlock1}
            block2={block2}
            setBlock2={setBlock2}
            block3={block3}
            setBlock3={setBlock3}
          />
          <Sobre />
          <Projetos setImg={setImg} />
          <img
            className={img === livro ? "livro mao" : "mao"}
            src={img}
            alt="mao do steve"
          />
          <Livro />
        </main>
      )}
      {/*<EntradaPort setClickPort={setClickPort} />*/}
      <main className="Profissional">
        <div className="headerMeio">
          <HeaderProf />
        </div>
        <HeroProf />
      </main>
    </>
  );
}

export default App;
