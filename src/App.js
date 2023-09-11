import Main from "./components/main";
import About from "./components/about";
import Faqs from "./components/faqs";
import Sponsors from "./components/sponsors";
import Committees from "./components/committees";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import ScrollToTop from "react-scroll-to-top";
import NavBarnew from "./components/newnavbar";
import Council from "./components/council";
import PaymentPolicy from "./components/paymentPolicy";
import { AuthProvider } from "./contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import TermsConditions from "./components/termsConditions";
import Campus from "./components/campus";
import LoginScreen from "./components/login";
import Signup from "./components/signup";
import ProtectedRoute from "./components/protectedroute";
import Dashboard from "./components/dashboard";
import IpRegistration from "./components/ipRegistration";
import DgRegistration from "./components/dgRegistration";
function App() {
  
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <div>

          <NavBarnew />
      <Main />
      <ScrollToTop
        smooth
        color="black"
        width="42px"
        height="42px"
        svgPath="M12.7,12.5C12.7,12.5,12.7,12.5,12.7,12.5c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l2.3-2.3l2.3,2.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12.7,12.5z M9.7,11.5L12,9.2l2.3,2.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-3-3c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4C8.7,11.8,9.3,11.8,9.7,11.5z"
        viewBox="0 0 24 24"
        className="bg-white outline outline-black rounded-l-lg animate-bounce"
        />

      <About />
      <Committees />
      {/* <Council /> */}
      <Gallery />
      {/* <Sponsors /> */}
      {/* <Faqs /> */}
      <Footer />
      </div>
        }/>
        <Route path="/CampusAmbassador" element={<Campus></Campus>}></Route>
        <Route path="/paymentPolicy" element={<PaymentPolicy/>}></Route>
        <Route path="/termsConditions" element={<TermsConditions/>}></Route>
        <Route path="/ipRegistration" element={<ProtectedRoute>
          <IpRegistration/>
          </ProtectedRoute>
          }></Route>
        <Route path="/dgRegistration" element={<ProtectedRoute>
          <DgRegistration/>
          </ProtectedRoute>
          }></Route>
        <Route path="/Login" element={<LoginScreen/>}></Route>
        <Route path="/SignUp" element={<Signup></Signup>}></Route>
        <Route path='/Dashboard' element={<ProtectedRoute>

           <Dashboard></Dashboard>
        </ProtectedRoute>
           }/>
        {/* <Route path='/' element={<ProtectedRoute>

           <IpRegistration></IpRegistration>
        </ProtectedRoute>
           }/>
        <Route path='/dgRegistration' element={<ProtectedRoute>

           <DgRegistration></DgRegistration>
        </ProtectedRoute>
           }/> */}
      </Routes>
      
      

    </AuthProvider>
  );
}

export default App;
