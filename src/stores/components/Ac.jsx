import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./singIn/superbase";

const Ac = () => {
  const [ac, setAc] = useState([]);

  useEffect(() => {
    const fetchAc = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("sub_category", "ac");
      if (error) {
        console.error("error feacthing data", error);
      } else {
        setAc(data);
      }
    };
    fetchAc();
  }, []);

  const fristFiveImages = ac.slice(0, 5);

  return (
    <>
      <h2>Ac</h2>

      <div className="proSection">
        {fristFiveImages.map((item) => {
          return (
            <div className="imageBox">
              <Link to={`/ac/${item.id}`}>
                <img className="proImage" src={item.image} alt="" />
              </Link>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ac;
