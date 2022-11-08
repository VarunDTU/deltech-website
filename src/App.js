import Main from './main';
import './App.css';
import Navbar from './navbar';
import About from './about';
import Faqs from './faqs';
import Footer from './footer';
import Comingsoon from './comingsoon';
function App() {
  return (
    <div>
      
      <Navbar/>
      <Main></Main>
      <Comingsoon/>
      <About></About>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
