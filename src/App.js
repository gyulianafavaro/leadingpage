import Menu from "./components/menu";
import site from"./components/site.png";
import titulo from "./components/global.module.css"
import capa from "./components/capa.jpg";
import descricao from "./components/global.module.css"
import Fundo from "./components/fundo"
import Loja from "./components/loja";
import Video from "./components/video";
import Rodape from "./components/rodape";

function App() {
  return (
    <>
    
    <Menu foto={site}></Menu>
    <h1 className={titulo.titulo}> 2011 ‧ Comédia romântica ‧ 5 temporadas</h1>
    <Fundo fundo={capa} ></Fundo>
    <h2 className={descricao.descricao}> Fátima e Sueli trabalham na Djalma Noivas, no bairro</h2> <h2>de Copacabana, Rio de Janeiro. Apesar de serem solteiras e independentes, ambas <h2></h2>procuram encontrar o grande amor de suas vidas, mas os seus relacionamentos são muito tumultuados.</h2>
    <Loja></Loja>
    <Video></Video>
    <Rodape></Rodape>
    </>
  );
}

export default App;
