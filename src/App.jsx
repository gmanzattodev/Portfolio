import "./App.css";
import Hero from "./page/hero/Hero";
import Header from "./page/Header/Header";
import { useState } from "react";
function App() {
  const [BlocosGrama, setBlocosGrama] = useState(null);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);

  

  return (
    <>
      <main className="fundoPrincipal">
        <Header BlocosGrama={BlocosGrama} />
        <Hero setBlocosGrama={setBlocosGrama} block1={block1} setBlock1={setBlock1} block2={block2} setBlock2={setBlock2} block3={block3} setBlock3={setBlock3} />
      </main>
    </>
  );
}

export default App;
