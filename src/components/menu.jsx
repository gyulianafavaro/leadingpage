import Style from "./menu.module.css"


function Menu( props )
{
    return(
        <figure className={Style.foto}>
        <img src={props.foto } alt=""/>
        </figure>
    )
}
export default Menu;