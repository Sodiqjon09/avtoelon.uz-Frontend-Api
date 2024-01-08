import { useEffect, useState } from "react";
import Like from "../Like/Like";
import "./Car_api.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((json) => {
        setData(json.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div id="api">
      {loading ? (
        <div>
          <h1>Loading...</h1>
          <div className="loadingio-spinner-spin-d6cvl6a6okb">
            <div className="ldio-7td4ewhbl1g">
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data?.map((car) => (
          <div id="apiimgText" key={car.idMeal}>
            <div>
              <img src={car.strMealThumb} alt="" />
            </div>
            <div id="carNameText">
              <h1>{car.strMeal}</h1>
              <Like />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Api;
