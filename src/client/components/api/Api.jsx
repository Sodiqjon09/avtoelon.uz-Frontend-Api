import { useEffect, useState } from "react";
import Like from "../Like/Like";
import "./Car_api.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((json) => {
        setDatas(json.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
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
        datas?.map((car) => (
          <div id="apiimgText" key={car.idMeal}>
            <div>
              <img src={car.strMealThumb} alt="" />
            </div>
            <div id="carUz">
              {data.map((item) => (
                <div key={item.id}>
                  <div id="carNameText">
                    <div id="model">
                    <h1>{item.model.name}</h1>
                    <Like />
                    </div>
                    <div id="cost" >
                    <p><span>Narxi:</span> <span>{item.narhi}</span></p>
                    </div>
                  </div>
                  <div id="apiText">
                    <p>{item.yili}</p>
                    <p>{item.kraska_holati}</p>
                    <p>{item.data}</p>
                    <p>{item.yana}</p>
                    <p>{item.rusum.name}</p>
                    <p>{item.shahar.name}</p>
                    <p>{item.yeyishi.name}</p>
                    <p>{item.karobka.name}</p>
                    <p>{item.rang.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Api;
