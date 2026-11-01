import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Informacao() {
    const [mudarTextos, setMudarTextos] = useState(1)

    useGSAP(() => {
        const time = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "+=3000",
                pin: true,
                markers: true,
                onUpdate: (self) => {
                    const id = Math.min(4, Math.floor(self.progress * 4) + 1);
                    setMudarTextos(id)
                }
            }
        })

    })
  
    const info = [
    {
      id: 1,
      titulo: "Ideias em código.",
      span: "Experiências na tela.",
      paragrafo: "Desenvolvendo interfaces com identidade e propósito.",
    },
    {
      id: 2,
      titulo: "Entre pixels",
      span: "e possibilidades.",
      paragrafo: "Criatividade e tecnologia em cada interação.",
    },
    {
      id: 3,
      titulo: "Da interface",
      span: "ao mundo físico.",
      paragrafo: "Construindo na web. Explorando novas conexões.",
    },
    {
      id: 4,
      titulo: "Curiosidade move.",
      span: "Código transforma.",
      paragrafo: "Cada projeto, uma nova forma de aprender e criar.",
    },
  ];

  const TextoAtual = info.find((add) => add.id === mudarTextos)

  return (
    <article className="info-hero">
      <h1>{TextoAtual.titulo} <br /><span>{TextoAtual.span}</span></h1>
      <p>{TextoAtual.paragrafo}</p>
    </article>
  );
}
