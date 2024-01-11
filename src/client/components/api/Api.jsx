import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import Like from "../Like/Like";
import "./Car_api.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState([])

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
const pastga =document.getElementById('pastga');
const tepaga =document.getElementById('tepaga');
const textYana =document.getElementById("textYana");
const apiimgText =document.getElementById("apiimgText");

  const Bottom = () => {
    textYana.style.display = 'block';
    pastga.style.display = 'none';
    tepaga.style.display = 'block';
    apiimgText.style.height = '100%';
  }
  const Top = () => {
    textYana.style.display = 'none';
    pastga.style.display = 'block';
    tepaga.style.display = 'none';
    apiimgText.style.height = '200px';
  }
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
        data?.map((item) => (
          <div id="apiimgText" key={item.id}>
            <div>
              <img
                src={`https://masterphoneuz.pythonanywhere.com${item.photo[0].photo}`}
                alt=""
              />
            </div>
            <div id="carUz">
              <div>
                <div id="carNameText">
                  <div id="model">
                    <h1>{item.model.name}</h1>
                    <Like />
                  </div>
                  <div id="cost">
                    <p>
                      <span>Narxi:</span> <span>{item.narhi} so`m</span>
                    </p>
                  </div>
                </div>
                <div id="apiText">
                  <p>yili: {item.yili}</p>
                  <p>{item.kraska_holati}</p>
                  <p>{item.data}</p>
                  <p>{item.rusum.name}</p>
                  <p>{item.shahar.name}</p>
                  <p>{item.yeyishi.name}</p>
                  <p>{item.karobka.name}</p>
                  <p>{item.rang.name}</p>
                  <div id="bottom">
                    <HiChevronDown id="pastga" onClick={Bottom} size={30} />
                    <HiChevronUp id="tepaga"onClick={Top} style={{display: 'none'}} size={30}/>
                  </div>
                  <p id="textYana" style={{display: 'none'}} >{item.yana}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Api;
