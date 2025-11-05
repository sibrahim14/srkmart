import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./singIn/superbase";

const Fridgeitems = () => {
  const [fridge, setFridge] = useState([]);
  useEffect(() => {
    const fetchFridge = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("sub_category", "fridge");
      if (error) {
        console.error("error fucting data", error);
      } else {
        setFridge(data);
      }
    };
    fetchFridge();
  }, []);
  const fristFiveImages = fridge.slice(0, 5);

  return (
    <>
      <h2>Fridge</h2>

      <div className="proSection">
        {fristFiveImages.map((item) => {
          return (
            <div className="imageBox">
              <Link to={`/fridge/${item.id}`}>
                <img className="proImage" src={item.image} alt="" />
              </Link>
              <p>₹{item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Fridgeitems;
