import { useEffect, useState } from "react";
// import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Like from "../Like/Like";
import "./Car_api.css";
import { FaEye } from "react-icons/fa";

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);



  
  // const toggle = document.getElementById("toggle");
  // const pastga = document.getElementById("pastga");
  // const tepaga = document.getElementById("tepaag");

  // const handleToggleClick = () => {
  //   toggle.style.display = "block";
  //   pastga.style.display = "none";
  // };
  // const handleToggleClick2 = () => {
  //   toggle.style.display = "none";
  //   tepaga.style.display = "block";
  // };
  // useEffect(() => {
  //   fetch("https://masterphoneuz.pythonanywhere.com/admin/avto/avto/add/")
  //     .then((response) => response.json())
  //     .then(json => console.log(json));
  // }, []);

  return (
    <div id="api">
      {loading ? (
        <div>
          <h1>Loading...</h1>
          <div className="loadingio-spinner-spin-d6cvl6a6okb">
            {/* Loading animation */}
          </div>
        </div>
      ) : (
        data.map((item) => (
          <div id="apiimgText" key={item.id}>
            <div>
              <img
                src={`https://masterphoneuz.pythonanywhere.com${item.photo[0].photo}`}
                alt={`Car model ${item.model.name}`}
              />
            </div>
            <div id="carUz">
              <div>
                <div id="carNameText">
                  <div id="model">
                    <h1>{item.rusum.name}</h1>
                    <Like />
                  </div>
                  <div id="cost">
                    <p>
                      <span>Narxi:</span>
                      <span>
                        {item.narhi} {item.valyuta}
                      </span>
                    </p>
                  </div>
                </div>
                <div id="apiText">
                  <p>yili: {item.yili},</p>
                  <p>{item.karobka},</p>
                  <p>dvigatel: {item.dvigatel},</p>
                  <p>{item.xolati},</p>
                  <p>{item.yeyishi},</p>
                  <p>{item.rang},</p>
                  <p>{item.savdolashuv},</p>
                  <p>{item.kraska_holati},</p>
                  <p>{item.rusum.name},</p>
                  {/* <div id="bottom">
                    <HiChevronDown
                      id="pastga"
                      onClick={handleToggleClick}
                      // style={{ display: "none" }}
                      size={30}
                    />
                    <HiChevronUp
                      style={{ display: "none" }}
                      id="tepaga"
                      onClick={handleToggleClick2}
                      size={30}
                    />
                    <p id="toggle" style={{ display: "none" }}>
                      {item.yana}
                    </p>
                  </div> */}
                </div>
              </div>
              <div id="api_footure">
                <div id="city">
                  <p>{item.shahar.name}</p>
                </div>
                <div id="sana">
                  <p>{item.data}</p>
                </div>
                <div id="eye">
                  <FaEye />
                  <p>
                    <span>{item.viewed_list} </span>
                    <span> ko`rganlar soni</span>
                  </p>
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