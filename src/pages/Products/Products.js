
import { Link } from "react-router-dom"


const products = () => {
  console.log(`se ejecuto Productos`);
  return (
    <>
    <h2>Products Page</h2>
    <Link to="/product/1">product 1</Link>
    <Link to="/product/2">product 2</Link>
    
    </>
  )
}

export default products