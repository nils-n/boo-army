import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Controls from './components/Controls';
import Title from './components/Title';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Music from './components/Music';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Controls/>
      <Title/>
      <Cards/>
      <Footer/>
      <Music/>
    </BrowserRouter>
  )
}

export default App
