import Style from "./video.module.css"

function Video( props )
{
    return(
        <>
          <div className={Style.video}>
        <h2 className={Style.texto}> 𝒜𝓈𝓈𝒾𝓈𝓉𝒶 𝒶𝑔𝑜𝓇𝒶</h2>
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/bW7mvdPzswU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </>
    )
}
export default Video;