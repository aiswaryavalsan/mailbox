import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Signup from "./Components/Authentication/Signup";
import mainImage from './assets/mainImage.jpg'
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./Components/Page/Home";
function App() {
  const bgImage={
    backgroundImage:`url(${mainImage})`,
    height:"100vh",
    width:"100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center"


  }
  return (
    <>
     <Navbar />
     <main style={bgImage} >
    <BrowserRouter>
    <Routes>
    
       
       <Route path="/" element={<Signup />} />
       <Route path="/home" element={<Home/>} />
     
      </Routes>
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
