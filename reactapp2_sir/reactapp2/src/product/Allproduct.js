import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Allproduct = () => {
  const [product, SetProdcut] = useState([]);

  console.log(product);

  useEffect(() => {
    allprod();
  }, []);

  const allprod = async () => {
    axios
      .get(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/allproducts.php"
      )
      .then((res) => {
        SetProdcut(res.data.datas.pr);
      });
  };

  const delconfirm = (id) => {
    delprod(id);
  };

  const delprod = async (id) => {
    axios
      .post(
        "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/delproduct.php",
        { prodid: id }
      )
      .then((res) => {
        alert(res.data.msg);
        allprod();
      });
  };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light"> All Products</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              {/* <td>{item.id}</td> */}
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.price}</td>
              <td>
                <Link
                  to={`/product/edit/${item.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
                <button onClick={() => delconfirm(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products/add" className="btn-btn-primary">
        Add Product
      </Link>
    </div>
  );
};

export default Allproduct;
