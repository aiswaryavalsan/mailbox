import Navbar from "./Components/Authentication/Navbar/Navbar";
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
     <main style={bgImage} >
      <Navbar />
      </main>
    </>
  );
}

export default App;
