import { useEffect, useState } from "react"
import Logo from "./Logo"
import NavBar from "./NavBar"
import "../../assets/css/Header.css";

export default function Header(){
    const [headerAtivo, setHeaderAtivo] = useState(false)

    useEffect(() => {
        function HeaderBlock() {
            if(window.scrollY > 300){
                setHeaderAtivo(true)
            } else {
                setHeaderAtivo(false)
            }
        }

        HeaderBlock()
        window.addEventListener("scroll", HeaderBlock)

        return () => {
            window.removeEventListener("scroll", HeaderBlock)
        }
    }, [])



    return (
        <>
            <header className={headerAtivo ? "header ativo" : "header"}>
                <Logo headerAtivo={headerAtivo} />
                <NavBar />
            </header>
        
        
        </>
    )
}