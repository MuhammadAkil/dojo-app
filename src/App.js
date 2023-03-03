import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import axios from "axios";
import Products from "./components/Products";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStore = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setQuote(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStore();
  }, []);

  return (
    <div className="App container">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div className=" text-center spinner-grow " role="status">
            <span className="sr-only visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {quote.map((quote) => (
            <div key={quote.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <Products quote={quote} className="card" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
