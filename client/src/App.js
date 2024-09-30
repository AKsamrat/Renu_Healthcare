import Header from './Components/Header'
import Footer from './Components/Footer'
import Loading from "./Components/Loading/Loading";
import { useState,useEffect } from "react";
import { Outlet } from 'react-router-dom';
function App() {
  const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    },[])

  return (
    <>
     {isLoading ? <Loading /> :
     (  <>
       <Header />
       <Outlet/>
       <Footer/>
        </>
     )}  
    </>
  );
}

export default App;
