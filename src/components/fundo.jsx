import Style from "./fundo.module.css"

function Fundo( props )
{
    return(
        <div>
        <img className={Style.Fundo}  src={props.fundo } alt=""/>
        </div>
    )
}
export default Fundo;