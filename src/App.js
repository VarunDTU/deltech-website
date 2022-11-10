import Main from "./components/main";
import About from "./components/about";
import Faqs from "./components/faqs";
import Committees from "./components/committees";
import Footer from "./components/footer";
// import Comingsoon from './components/comingsoon'
// import Nav from './components/newnavbar'
import Timer from "./components/timeer";
import NavBarnew from "./components/newnavbar";

function App() {
  return (
    <div>
     
      <NavBarnew/>
      <Main />
      <About />
      <Committees />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
