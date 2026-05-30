import Card from "../components/Card";

function Cart({ cart }) {
  if (cart.length === 0) {
    return <h2>Empty Cart 🛒</h2>;
  }

  return (
    <div className="container">

      <h1>My Cart 🛒</h1>

      <div className="row">
        

        {cart.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-3">

            <Card
             key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              rating={false}
            />

          </div>
        ))}

      </div>

    </div>
  );
}

export default Cart;