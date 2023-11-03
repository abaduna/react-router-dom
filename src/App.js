
import { BrowserRouter as Router, Routes, Route,Navigate   } from "react-router-dom";
import './App.css';

import Home from "../src/pages/home/home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import { useState } from "react";
import Navbar from "./componets/layout/Navbar";
function App() {
  // let navigate = useNavigate()
  // const [error,setError] = useState(null)
  const [serch,setSerch] = useState("")

  const handelSerch =(e)=>{
    e.preventDefault()
    console.log(e);
    const [product] =e.target.elements
    console.log(product.value);
    setSerch(product.value)

  }
  return (
  
  <> 
    {/* <form onSubmit={handelSerch}>
    <input type="text" placeholder="buscar..." ></input>      
    <button type="submit">Buscar</button>
    </form> */}
    
    <Router>
           <  Navbar ></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route  path="/products" element={<Products serch={serch} />} /> */}
          <Route  path="/products" element={<Products  />} />
          <Route  path="/product/:id" element={<Product />}    />
          {/* <Route path="/product/1" element={<Product />} /> */}
          {/* <Route path="/product/1" render={(props) => <Product {...props} />} /> */}
      
     

      </Routes>
    </Router>
    </>
  );  


}

export default App;

{/* 
<Route path="/category" Component={(props)=>{
  console.log(props);
  return(
<section>
  <h2>Categoria</h2>
</section>            
  )}}   /> 
*/}
   {/* <Route
        path="*"
        element=
        {<Navigate to="/" replace />}/> */}