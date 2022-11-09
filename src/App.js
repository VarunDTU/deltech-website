import Main from "./components/main";
import Navbar from "./components/navbar";
import About from "./components/about";
import Faqs from "./components/faqs";
import Footer from "./components/footer";
// import Comingsoon from './components/comingsoon'
// import Nav from './components/newnavbar'
import Timer from "./components/timeer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Timer />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
