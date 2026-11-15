import "../css/bancada.css";

export default function CraftTable({ variasAnimacao }){

    return (
        <>
            <article className="bancada">
                <div className={variasAnimacao === "aumentar" ? "mesa-bancada ativo" : "mesa-bancada"}>

                </div>
            </article>
        </>
    )
}