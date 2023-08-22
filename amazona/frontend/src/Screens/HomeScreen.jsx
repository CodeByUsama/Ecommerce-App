import { Link } from "react-router-dom";
import data from "../../backend/data";

function HomeScreen() {
  return (
    <div className="mt-3 p-2">
      <h1>Featured Products</h1>
      <div className="product">
        <div className="d-flex flex-wrap justify-content-center w-100 gap-3 ">
        {data.product.map((product) => (
          <div className="card" style={{ width: "280px" }} key={product.slug}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to="#" className="btn btn-primary">
                  ADD TO CART
                </Link>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
