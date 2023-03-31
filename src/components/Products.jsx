import React from "react";

function Products({ quote, category }) {
  // const { id, image, price, title, description } = quote;

  const product = {
    Mango: 200,
    Apple: 300,
    Banana: 400,
  };

  return (
    <>
      <h2 className="pb-3  fs-2 fw-semibold">{category}</h2>

      {quote.map((quote) => (
        <div
          key={quote.id}
          className="border-1 shadow rounded-3 card d-flex justify-content-center my-4 align-items-streched"
          style={{
            maxHeight: "500px",
          }}
        >
          <img
            src={quote.image}
            className=" card-img container text-center py-4 "
            alt="..."
          />
          <div className="card-body">
            <p>Price is ${quote.price}</p>

            <h5 className="card-title text-truncate text-nowrap">
              {quote.title}
            </h5>

            <p
              className="card-text text-truncate"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-title="tooltip"
            >
              {quote.description}
            </p>
            <a href="/home" className="btn btn-primary">
              Add
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
