
const Product = ({ match }) => {
  console.log(match);
  console.log(`se ejecuto product`);
  const { id } = match.params;
  console.log(id);
  return (
    <>
      <h1>Product Page</h1>
    </>
  );
}

export default Product