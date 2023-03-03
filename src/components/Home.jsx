import { React, useState } from "react";

function Home() {
  const [name, setName] = useState("Akil");
  const handleclick = () => {
    setName("Mehar");
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>

      <button onClick={handleclick}>Click</button>

      {/* <button onClick={(e) => handleclick(e, "Akil Mehar")}>Click</button> */}
    </div>
  );
}

export default Home;
