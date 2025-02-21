import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Signup from "./Components/Authentication/Signup";
import mainImage from './assets/mainImage.jpg'
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
    
      <Signup/>
      </main>
     
    </>
  );
}

export default App;
