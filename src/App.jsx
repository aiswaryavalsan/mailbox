import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Signup from "./Components/Authentication/Signup";
import mainImage from './assets/mainImage.jpg'
import { Route,Routes,Navigate} from "react-router-dom";
import Home from "./Components/Page/Home";
import ChangePassword from "./Components/Page/ChangePassword";
import { useSelector } from "react-redux";
import EmailForm from "./Components/Page/EmailForm";
import Sidebar from "./Components/Navbar/SideBar";

function App() {
  
  const bgImage={
    backgroundImage:`url(${mainImage})`,
    height:"100vh",
    width:"100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center"


  }
  const isAuthenticated=useSelector(state=>state.auth.isLoggedIn)
  console.log(isAuthenticated)
  return (
    <>
     
     {/* <main style={bgImage} > */}
   
    <Navbar />
    <div className="flex">
    {isAuthenticated&&<Sidebar/>}
    <Routes>
       <Route path='/' element={<Signup/>}/>
       <Route path="/login" element={<Signup />} />
       <Route path="/home" element={isAuthenticated?<Home/>:<Navigate to='/login'/>} />
       <Route path="/home/compose" element={isAuthenticated?<EmailForm/>:<Navigate to='/login'/>}/>
       <Route path='/changepassword' element={isAuthenticated?<ChangePassword/>:<Navigate to='/login'></Navigate>}></Route>
       <Route path="*" element={<h1 className="text-center text-red-500">Page Not Found</h1>} />
      </Routes>
      </div>
      {/* </main> */}
     
    </>
  );
}

export default App;
