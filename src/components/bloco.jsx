import Style from "./bloco.module.css"


function Bloco( props )
{
    return(
       <section className={Style.Bloco}>
        <span>{props.titulo}</span>
        <figure className={Style.foto}>
        <img src={props.foto } alt=""/>
        </figure>
       </section>
    )
}
export default Bloco;