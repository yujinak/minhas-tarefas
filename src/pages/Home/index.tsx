import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
