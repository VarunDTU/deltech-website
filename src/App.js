import Main from "./components/main";
import About from "./components/about";
import Faqs from "./components/faqs";
import Committees from "./components/committees";
import Footer from "./components/footer";
import ScrollToTop from "react-scroll-to-top";
// import Comingsoon from './components/comingsoon'
// import Nav from './components/newnavbar'
import NavBarnew from "./components/newnavbar";

function App() {
  return (
    <div>
      <NavBarnew />
      <Main />
      <ScrollToTop
        smooth
        color="white"
        width="50px"
        height="50px"
        svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"
        viewBox="0 0 32 32" 
        style={{
          backgroundColor: "#9400D3",
          borderRadius: "40px",
          boxShadow: "10px 5px 5px #800080",
        }}
      />

      <About />
      <Committees />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
