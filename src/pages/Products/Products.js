
import { Link } from "react-router-dom"


const products = () => {
  console.log(`se ejecuto Productos`);
  return (
    <>
    <h2>Products Page</h2>
    <Link to="/product/1">product 1</Link><br/>
    <Link to="/product/2">product 2</Link><br/>
    <Link to="/product/3">product 3</Link><br/>
    
    </>
  )
}

export default products