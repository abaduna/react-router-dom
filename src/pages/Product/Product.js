import { useParams } from "react-router-dom";

const Product = (props) => {

  console.log(`se ejecuto product`);
  console.log(props);
  const { id } = useParams();
  console.log("Product ID:", id);
  return (
    <>
      <h1>Product Page <b>{id}</b></h1>
    </>
  );
}

export default Product