import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Editproduct = () => {
  const params = useParams;

  useEffect(() => {
    productone(params.pid);
  });
  console.log("my id" + params.pid);
  const productone = (id) =>
    axios.get(
      "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/getproduct.php",
      {
        prid: params.pid,
      }
    );

  return (
    <div className="col-sm-8">
      <h1>Edit product</h1>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Product Details</label>
          <textarea
            type="text"
            name="details"
            className=" form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter Price"
            className="form-control"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};
export default Editproduct;
