import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDetails = () => {
  const params = useParams();
  console.log(params.id);
  const product = params.id;

  const [data, setData] = useState([]);

  const fetchData = async () => {
    let resp = await axios("https://e-commerce-backend-cpp5.onrender.com/data");

    setData(resp.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      ProductDetails
      <div className="detaipage-main-container">
        {data.length > 0
          ? data
              .filter((item) => 
                item === product
              )
              .map((item) => {
                return (
                  <>
                    <div className="detail-page-big-avatar">
                      <img src={item.image} />
                      {item.price}
                    </div>
                  </>
                );
              })
          : "Loadingg"}
      </div>
    </>
  );
};

export default ProductDetails;
