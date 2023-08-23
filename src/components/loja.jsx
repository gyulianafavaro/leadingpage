import Bloco from "./bloco";
import Style from "./loja.module.css"
import Foto1 from "./foto1.jpg"
import Foto2 from "./Fatima e Sueli - tapas e beijos.jpg"
import Foto3 from "./eu amo armane - tapas e beijos.jpg"


function Loja( props )
{
    return(
        <>
        <h2 className={Style.nome}>    𝐑𝐨𝐮𝐩𝐚𝐬 𝐝𝐚 𝐒𝐞́𝐫𝐢𝐞 ♡</h2>
       <section className={Style.loja}>
        <Bloco titulo= "Roupa Armane e Jorge R$50,00"  foto={Foto1}></Bloco>
        <Bloco titulo="Uniforme de Fátima e Sueli R$60,00 " foto={Foto2}></Bloco>
        <Bloco titulo="Camisa personalizada R$35,00 " foto={Foto3}></Bloco>
       </section>
       </>
    )
}
export default Loja;