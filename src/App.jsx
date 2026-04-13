import React, { useState } from "react";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import { db } from "./data/db.js";

function App() {
  const [data, setData] = useState(db);
  const [cart,setCart] = useState([]);
 
  return (
    <>
      <Header></Header>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitarra) => (
            <Card key={guitarra.id} guitarra={guitarra} setCart={setCart} />
          ))}
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
