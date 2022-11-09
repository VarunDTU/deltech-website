import Main from './main'
import './App.css';
import Navbar from './navbar';
import About from './about';
import Faqs from './faqs';
import Footer from './footer';
import Comingsoon from './comingsoon'
import Nav from './newnavbar'
import Timer  from './timeer';
function App() {
  return (
    <div>
      
      <Navbar/>
      <Main></Main>
      <About></About>
      <Timer></Timer>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
