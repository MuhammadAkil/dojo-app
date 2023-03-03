import React from "react";

function Products({ quote }) {
  const { id, image, price, title, description } = quote;

  return (
    <div
      key={id}
      className="border-1 shadow rounded-3 card d-flex justify-content-center my-4 align-items-streched"
      style={{
        maxHeight: "500px",
      }}
    >
      <img
        src={image}
        className=" card-img container text-center py-4 "
        alt="..."
      />
      <div className="card-body">
        <p>Price is ${price}</p>

        <h5 className="card-title text-truncate text-nowrap">{title}</h5>

        <p
          className="card-text text-truncate"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="tooltip"
        >
          {description}
        </p>
        <a href="/home" className="btn btn-primary">
          Add
        </a>
      </div>
    </div>
  );
}

export default Products;
