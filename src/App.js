import Main from "./components/main";
import About from "./components/about";
import Faqs from "./components/faqs";
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
      <Timer />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
