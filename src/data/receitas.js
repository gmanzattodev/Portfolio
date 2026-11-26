import Alavanca from "../assets/img/receitas/Alavanca.png";
import Carrinho from "../assets/img/receitas/carrinho.png";
import Comparador from "../assets/img/receitas/comparador.png";
import CoranteAzul from "../assets/img/receitas/coranteAzul.png";
import Espada from "../assets/img/receitas/espada.png";
import Estandarte from "../assets/img/receitas/estandarte.png";
import Frasco from "../assets/img/receitas/frasco.png";
import Funil from "../assets/img/receitas/funil.png";
import Livro from "../assets/img/receitas/livro.png";
import Moldura from "../assets/img/receitas/moldura.png";
import Muda from "../assets/img/receitas/muda.png";
import Nether from "../assets/img/receitas/nether.png";
import Pintura from "../assets/img/receitas/pintura.png";
import Trigo from "../assets/img/receitas/trigo.png";
import TrilhoEletrico from "../assets/img/receitas/trihoEletrico.png";
import Vidro from "../assets/img/receitas/vidro.png";
import BlocoComando from "../assets/img/bloco-de-comando.webp";
import Bancada from "../assets/img/bancada-1.webp";
import Bau from "../assets/img/bau.webp";
import LivroPena from "../assets/img/contato.png";
import Bussola from "../assets/img/bussola.webp";
import Redstone from "../assets/img/redstone-1.webp";
import Picareta from "../assets/img/picareta.webp";
import BlocoTijolos from "../assets/img/bloco-tijolos.webp";
import Cana from "../assets/img/receitas/cana.webp"
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
import Livror from "../assets/img/contato.png";

const aplicacoes = [
  { id: "esportcars", span: "EsportCars", img: EsportCars },
  { id: "agro", span: "Agro", img: Agro },
  { id: "gmos", span: "GM OS", img: GMOS },
  { id: "gmos-2", span: "GM OS 2.0", img: GMOS2 },
  { id: "minetec", span: "Minetec", img: Minetec },
  { id: "portfolio", span: "Portfólio", img: Portfolio },
  { id: "marilia", span: "Marilia", img: Marilia },
  {
    id: "marilia-manzatto-furlan",
    span: "Marilia Manzatto Furlan Fotografia",
    img: MariliaManzattoFurlan,
  },
  { id: "natal", span: "Natal", img: Natal },
  { id: "bio", span: "Bio", img: Bio },
  { id: "projeto-linux", span: "Projeto Linux", img: ProjetoLinux },
  { id: "linux", span: "Linux", img: Linux },
  { id: "javascript", span: "JavaScript", img: JavaScript },
  { id: "html-e-css", span: "HTML e CSS", img: HtmlECss },
  { id: "gmanzattodev", span: "GmanzattoDev", img: GmanzattoDev },
  { id: "contato", span: "Contato", img: Livror },
].map((item) => ({
  ...item,
  categoria: "aplicacoes",
  ocultarEmTodos: true,
}));

export const receitas = [
  ...aplicacoes,
  {
    id: "alavanca",
    span: "Alavanca",
    img: Alavanca,
    categoria: "experimentos",
  },
  {
    id: "carrinho",
    span: "Carrinho-de-mina",
    img: Carrinho,
    categoria: "sites",
  },
  {
    id: "comparador",
    span: "Comparador de redstone",
    img: Comparador,
    categoria: "experimentos",
  },
  {
    id: "corante-azul",
    span: "Corante azul",
    img: CoranteAzul,
    categoria: "sites",
  },
  {
    id: "espada",
    span: "Espada de diamante",
    img: Espada,
    categoria: "destaques",
  },
  {
    id: "estandarte",
    span: "Estandarte",
    img: Estandarte,
    categoria: "destaques",
  },
  {
    id: "frasco",
    span: "Frasco de experiência",
    img: Frasco,
    categoria: "experimentos",
  },
  {
    id: "funil",
    span: "Funil",
    img: Funil,
    categoria: "sites",
  },
  {
    id: "livro",
    span: "Livro",
    img: Livro,
    categoria: "sites",
  },
  {
    id: "moldura",
    span: "Moldura",
    img: Moldura,
    categoria: "sites",
  },
  {
    id: "muda",
    span: "Muda de pinheiro",
    img: Muda,
    categoria: "sites",
  },
  {
    id: "nether",
    span: "Estrela do Nether",
    img: Nether,
    categoria: "destaques",
  },
  {
    id: "pintura",
    span: "Pintura",
    img: Pintura,
    categoria: "sites",
  },
  {
    id: "trigo",
    span: "Trigo",
    img: Trigo,
    categoria: "sites",
  },
  {
    id: "trilho-eletrico",
    span: "Trilho elétrico",
    img: TrilhoEletrico,
    categoria: "sites",
  },
  {
    id: "vidro",
    span: "Vidro",
    img: Vidro,
    categoria: "sites",
  },
  {
    id: "bloco-comando",
    span: "Bloco de comando",
    img: BlocoComando,
    categoria: "sites",
  },
  {
    id: "bancada",
    span: "Bancada de trabalho",
    img: Bancada,
    categoria: "sites",
  },
  {
    id: "bau",
    span: "Baú",
    img: Bau,
    categoria: "sites",
  },
  {
    id: "livro-pena",
    span: "Livro e pena",
    img: LivroPena,
    categoria: "destaques",
  },
  {
    id: "bussola",
    span: "Bússola",
    img: Bussola,
    categoria: "sites",
  },
  {
    id: "redstone",
    span: "Redstone",
    img: Redstone,
    categoria: "experimentos",
  },
  {
    id: "picareta",
    span: "Picareta de diamante",
    img: Picareta,
    categoria: "destaques",
  },
  {
    id: "bloco-tijolos",
    span: "Bloco de tijolos",
    img: BlocoTijolos,
    categoria: "sites",
  },
  {
    id: "cana-de-acucar",
    span: "Cana de Açucar",
    img: Cana,
    categoria: "destaques"
  }
];
