import CardPerfil from "../../assets/components/CardPerfil";
import InfoHero from "../../assets/components/InfoHero";
import "../../assets/css/hero.css";


export default function Hero({ setBlocosGrama, block1, setBlock1, block2, setBlock2, setBlock3, block3 }){
    

    return (
        <>
            <section className="hero" id="inicio">
                <InfoHero setBlocosGrama={setBlocosGrama} setBlock1={setBlock1} block1={block1} />
                <CardPerfil setBlocosGrama={setBlocosGrama} setBlock2={setBlock2} block2={block2} setBlock3={setBlock3} block3={block3} />
            </section>
        
        </>
    )
}