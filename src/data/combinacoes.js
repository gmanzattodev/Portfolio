import EsportCars from "../assets/img/Projetos/EsportCars.webp";
import Agro from "../assets/img/Projetos/agro.webp";
import GMOS from "../assets/img/Projetos/GMOS.webp";
import GMOS2 from "../assets/img/Projetos/GMOS-2.0.webp";
import Minetec from "../assets/img/Projetos/MINETEC.webp";
import Portfolio from "../assets/img/Projetos/Portfolio.webp";
import Marilia from "../assets/img/Projetos/Marilia.webp";
import MariliaManzattoFurlan from "../assets/img/Projetos/Mariliamanzattofurlan.webp";
import Natal from "../assets/img/Projetos/Natal.webp";
import Bio from "../assets/img/Projetos/bio.webp";
import ProjetoLinux from "../assets/img/Projetos/projetoLinux.webp";
import Linux from "../assets/img/Projetos/Linux.webp";
import JavaScript from "../assets/img/Projetos/JavaScript.webp";
import HtmlECss from "../assets/img/Projetos/html-e-css.webp";
import GmanzattoDev from "../assets/img/Projetos/gmanzattodev.webp";
import Livro from "../assets/img/contato.png";

const estilosProjetos = {
  // Carro esportivo vermelho
  EsportCars: {
    background: "#342025",
    color: "#FFF2EE",
    border: "3px solid #F05245",
  },

  // Plantação de trigo
  Agro: {
    background: "#23452B",
    color: "#FFF3BC",
    border: "3px solid #D9B64F",
  },

  // Computador retrô
  GMOS: {
    background: "#D5D0BD",
    color: "#232D29",
    border: "3px solid #62695E",
  },

  // Desktop com iluminação ciano
  GMOS2: {
    background: "#102B38",
    color: "#D9FAFF",
    border: "3px solid #28D7EA",
  },

  // Picareta de diamante sobre a bancada
  MINETEC: {
    background: "#463022",
    color: "#FFF1D9",
    border: "3px solid #40D6C4",
  },

  // Monograma dourado
  Portfolio: {
    background: "#29221E",
    color: "#FFF1CF",
    border: "3px solid #DAAE55",
  },

  // Câmera vintage
  Marilia: {
    background: "#F2E4D2",
    color: "#432B21",
    border: "3px solid #946345",
  },

  // Câmera preta com lente rosa
  Mariliamanzattofurlan: {
    background: "#30232E",
    color: "#FFEAF4",
    border: "3px solid #E68BB8",
  },

  // Pinheiro com enfeites vermelhos
  Natal: {
    background: "#163D30",
    color: "#FFF3D2",
    border: "3px solid #E4675F",
  },

  // Bússola dourada sobre uma fotografia
  bio: {
    background: "#DEEFF5",
    color: "#183B4B",
    border: "3px solid #A7792F",
  },

  // Arquivo metálico com alavanca
  projetoLinux: {
    background: "#343B46",
    color: "#FFF2D9",
    border: "3px solid #D6A865",
  },

  // Terminal com fósforo verde
  Linux: {
    background: "#101C14",
    color: "#A8FFA5",
    border: "3px solid #55AE64",
  },

  // Circuito amarelo com redstone
  JavaScript: {
    background: "#F2CD48",
    color: "#28210C",
    border: "3px solid #956022",
  },

  // Parede de tijolos com tinta azul
  "html-e-css": {
    background: "#233F66",
    color: "#F3F7FF",
    border: "3px solid #ED8A4B",
  },

  // Aventureiro com capuz verde-azulado
  gmanzattodev: {
    background: "#164347",
    color: "#FFF0D6",
    border: "3px solid #61BBAE",
  },
  Livro: {
    background: "#241d16",
    border: "3px solid #312b25",
    cursor: "pointer"
  }
};

export const combinacoes = [
  {
    projeto: EsportCars,
    link: "https://gmanzattodev.github.io/EsportCars/",
    style: estilosProjetos.EsportCars,
    itens: [
      null, "Vidro", null,
      "Alavanca", "Carrinho-de-mina", "Redstone",
      "Trilho elétrico", "Trilho elétrico", "Trilho elétrico",
    ],
  },
  {
    projeto: Agro,
    link: "https://gmanzattodev.github.io/agro/",
    style: estilosProjetos.Agro,
    itens: [
      null, "Muda de pinheiro", null,
      "Trigo", "Trigo", "Trigo",
      null, "Funil", "Baú",
    ],
  },
  {
    projeto: GMOS,
    style: estilosProjetos.GMOS,
    itens: [
      "Vidro", "Vidro", "Vidro",
      null, "Alavanca", null,
      null, "Redstone", null,
    ],
  },
  {
    projeto: GMOS2,
    link: "https://gmanzattodev.github.io/GMOS-2.0/",
    style: estilosProjetos.GMOS2,
    itens: [
      "Vidro", "Vidro", "Vidro",
      "Comparador de redstone", "Bloco de comando", "Baú",
      null, "Redstone", null,
    ],
  },
  {
    projeto: Minetec,
    link: "https://gmanzattodev.github.io/MINETEC/",
    style: estilosProjetos.MINETEC,
    itens: [
      null, "Picareta de diamante", null,
      "Bloco de tijolos", "Bancada de trabalho", "Bloco de tijolos",
      null, "Redstone", null,
    ],
  },
  {
    projeto: Portfolio,
    link: "",
    style: estilosProjetos.Portfolio,
    itens: [
      null, "Estandarte", null,
      "Livro e pena", "Moldura", "Pintura",
      null, "Bússola", null,
    ],
  },
  {
    projeto: Marilia,
    style: estilosProjetos.Marilia,
    link: "https://gmanzattodev.github.io/Marilia/",
    itens: [
      null, "Vidro", null,
      null, "Pintura", null,
      null, "Moldura", null,
    ],
  },
  {
    projeto: MariliaManzattoFurlan,
    style: estilosProjetos.Mariliamanzattofurlan,
    link: "https://gmanzattodev.github.io/Mariliamanzattofurlan/",
    itens: [
      "Pintura", "Estandarte", "Pintura",
      "Vidro", "Moldura", "Vidro",
      null, "Livro e pena", null,
    ],
  },
  {
    projeto: Natal,
    link: "https://gmanzattodev.github.io/Natal/",
    style: estilosProjetos.Natal,
    itens: [
      null, "Estrela do Nether", null,
      null, "Muda de pinheiro", null,
      "Muda de pinheiro", "Baú", "Muda de pinheiro",
    ],
  },
  {
    projeto: Bio,
    link: "https://gmanzattodev.github.io/bio/",
    style: estilosProjetos.bio,
    itens: [
      null, "Moldura", null,
      "Livro", "Bússola", "Pintura",
      null, "Livro e pena", null,
    ],
  },
  {
    projeto: ProjetoLinux,
    link: "https://github.com/gmanzattodev/projetoLinux",
    style: estilosProjetos.projetoLinux,
    itens: [
      null, "Alavanca", null,
      "Livro", "Funil", "Baú",
      null, "Bloco de comando", null,
    ],
  },
  {
    projeto: Linux,
    link: "https://github.com/gmanzattodev/Linux",
    style: estilosProjetos.Linux,
    itens: [
      null, "Livro", null,
      "Alavanca", "Bloco de comando", "Redstone",
      null, "Livro e pena", null,
    ],
  },
  {
    projeto: JavaScript,
    link: "https://github.com/gmanzattodev/javascript",
    style: estilosProjetos.JavaScript,
    itens: [
      null, "Alavanca", null,
      "Redstone", "Comparador de redstone", "Redstone",
      null, "Bloco de comando", null,
    ],
  },
  {
    projeto: HtmlECss,
    link: "https://github.com/gmanzattodev/html-e-css",
    style: estilosProjetos.HtmlECss,
    itens: [
      null, "Livro", null,
      "Bloco de tijolos", "Corante azul", "Vidro",
      "Bloco de tijolos", "Bloco de tijolos", "Bloco de tijolos",
    ],
  },
  {
    projeto: GmanzattoDev,
    link: "https://github.com/gmanzattodev/GmanzattoDev",
    style: estilosProjetos.gmanzattodev,
    itens: [
      null, "Estandarte", null,
      "Bússola", "Livro e pena", "Estrela do Nether",
      null, "Livro", null,
    ],
  },
  {
    projeto: Livro,
    style: estilosProjetos.Livro,
    itens: [
      null, null, null,
      "Cana de Açucar", "Cana de Açucar", "Cana de Açucar",
      null, null, null
    ]
  }
];