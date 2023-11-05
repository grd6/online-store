import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail.jsx";


const Home = () => {
  const [items, setItems] = useState([]);

  const data_Url = "https://api.escuelajs.co/api/v1/products";

  const getData = async () => {
    try {
      const response = await axios.get(data_Url);
      if (response.status !== 200) {
        throw new error("No hay datos que mostrar");
      }
      const items = response.data;
      setItems(items);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {console.log(items)}
        {items?.map((item, i) => (
          <Card key={i} items={item} />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
};

export default Home;
