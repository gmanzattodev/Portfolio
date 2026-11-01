import LogoBranco from "../../assets/img/logo-branco.webp";
import LogoPreto from "../../assets/img/logo-preto.webp";

export default function Logo({ headerAtivo }) {
    
    return (
        <>
            <div className="logo">
                <img src={headerAtivo ? LogoBranco : LogoPreto} alt="Logo de perfil do Porfólio"/>
            </div>
        
        </>
    )
}