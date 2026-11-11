import { useState } from "react";
import "./App.css";
import Hero from "./page/hero/Hero";
import Header from "./page/Header/Header";
function App() {

  const [click, setClick] = useState(false)
  return (
    <>
      <main className="fundoPrincipal">
        <Header />
        <Hero />
      </main>
    </>
  )
}

export default App;
