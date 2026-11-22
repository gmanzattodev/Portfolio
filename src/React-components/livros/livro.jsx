import { useState } from "react"

export default function Livro(){
    const [clickPapel, setClickPapel] = useState(0)

    return (
        <>
            <article className={clickPapel === 1 ? "livro virar" : "livro"} onClick={() => setClickPapel(anterior => anterior + 1)}>
                    <div className={clickPapel === 2 ? "papel1 virar" : "papel1"}></div>
                    <div className={clickPapel === 3 ? "papel2 virar" : "papel2"}></div>
                    <div className={clickPapel === 4 ? "papel3 virar" : "papel3"}></div>
            </article>
        
        </>
    )
}