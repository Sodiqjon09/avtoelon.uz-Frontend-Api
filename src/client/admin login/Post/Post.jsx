import { useState } from "react";
import AdvertiseText from "../../components/AdvertiseText/AdvertiseText";
import { carNames, carNamesMapping } from "../../data/PostData/PostData";
import Navbar from "../../components/navbar/navbar";
import Footure from "../../components/Footure/Footure";
import "./Post.css";

const Post = () => {
  const [yearError, setYearError] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedModels, setSelectedModels] = useState([]);
  const [priceError, setPriceError] = useState(false);

  const [newCarData, setNewCarData] = useState({
    id: 14,
    yili: "",
    savdolashuv: "",
    yurgani: "",
    uzatma: "",
    xolati: "",
    yeyishi: "",
    karobka: "",
    rang: "",
    kraska_holati: "",
    narhi: "",
    valyuta: "",
    dvigatel: "",
    data: "",
    viewed_list: 0,
    yana: null,
    model: 3,
    rusum: 4,
    shahar: 4,
    user: 1,
    photo: [14, 15],
  });

  const handleInputChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      setNewCarData({
        ...newCarData,
        [name]: files[0],
      });
    } else if (name === "yili") {
      const year = parseInt(value, 10);
      setNewCarData({
        ...newCarData,
        [name]: value,
      });

      if (year < 1900 || year > 2024) {
        setYearError(true);
      } else {
        setYearError(false);
      }
    } else if (name === "narhi") {
      const numericValue = parseInt(value, 10);

      if (numericValue < 100 || numericValue > 1000000) {
        setPriceError(true);
      } else {
        setPriceError(false);
      }

      setNewCarData({
        ...newCarData,
        [name]: numericValue,
      });
    } else {
      setNewCarData({
        ...newCarData,
        [name]: value,
      });
    }
  };

  const postData = async () => {
    try {
      const formData = new FormData();

      for (const key in newCarData) {
        if (key === "photo") {
          const files = newCarData[key];
          if (files) {
            for (let i = 0; i < files.length; i++) {
              formData.append(`${key}_${i}`, files[i]);
            }
          }
        } else {
          formData.append(key, newCarData[key]);
        }
      }

      const response = await fetch(
        "https://masterphoneuz.pythonanywhere.com/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Data successfully posted!");
      } else {
        console.error("Error posting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleCarChange = (event) => {
    const selectedCarName = event.target.value;
    setSelectedCar(selectedCarName);
    setSelectedModels(carNamesMapping[selectedCarName] || []);
    const rusumSelect = document.getElementById("rusumSelect");
    rusumSelect.style.display = "none";
  };

  return (
    <div>
      <Navbar />
      <div id="Post">
        <div className="content">
          <div>
            <h2>Add Avto</h2>
            <h2>Add Avto</h2>
          </div>
        </div>
        <AdvertiseText />

        <form encType="multipart/form-data">
          <label id="AddAvto" name="Model">
            <p>Model:</p>
            <select
              name="model"
              value={selectedCar}
              onChange={handleCarChange}
              id=""
            >
              <option value="">Tanlash</option>
              {carNames.map((carName) => (
                <option key={carName} value={carName}>
                  {carName}
                </option>
              ))}
            </select>
          </label>
          <label id="AddAvto" name="Rusum">
            <p>Rusum:</p>
            <select name="" id="rusumSelect">
              <option value="">Tanlash</option>
            </select>
            {selectedModels.length > 0 && (
              <select name="" id="">
                <option value="">Tanlash</option>
                {selectedModels.map((model) => (
                  <option key={model.id}>{model.name}</option>
                ))}
              </select>
            )}
          </label>
          <label id="AddAvto" name="Yili">
            <div>
              <p>Yili:</p>
            </div>
            <div className="yili">
              <input
                value={newCarData.yili}
                type="number"
                name="yili"
                onChange={handleInputChange}
              />
              {yearError && (
                <p
                  style={{
                    color: "red",
                    fontSize: ".8461538462em",
                    width: "100%",
                  }}
                >
                  Yaroqsiz yil. 1900 va 2024 yillar oralig`idagi yilni kiriting.
                </p>
              )}
            </div>
          </label>
          <label id="AddAvto">
            <p>Narhi:</p>
            <div className="Componentinput">
              <div id="narxiFlex">
                <div>
                  <input
                    value={newCarData.narhi}
                    type="number"
                    name="narhi"
                    onChange={handleInputChange}
                  />
                </div>
                <label>
                  <select
                    value={newCarData.valyuta}
                    onChange={handleInputChange}
                    name="valyuta"
                    id=""
                  >
                    <option value="UZS">UZS</option>
                    <option value="USD">USD</option>
                  </select>
                </label>
              </div>
              <br />
              {priceError && (
                <p
                  style={{
                    color: "red",
                    fontSize: ".8461538462em",
                    width: "100%",
                  }}
                >
                  Yaroqsiz summa. 100 va 1000000 summa o`ralig`ida summa
                  kiriting
                </p>
              )}
            </div>
          </label>
          <label id="AddAvto">
            <p>savdolashuv:</p>
            <div>
              <select
                id=""
                value={newCarData.savdolashuv}
                type="text"
                name="savdolashuv"
                onChange={handleInputChange}
              >
                <option value="">Savdolashuv yoq</option>
                <option value="">Savdolashuv bor</option>
              </select>
            </div>
          </label>

          <label id="AddAvto">
            <p>Uzatma:</p>
            <input
              value={newCarData.uzatma}
              type="text"
              name="uzatma"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Xolati:</p>
            <input
              value={newCarData.xolati}
              type="text"
              name="xolati"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Yeyishi:</p>
            <input
              value={newCarData.yeyishi}
              type="text"
              name="yeyishi"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Karobka:</p>
            <input
              value={newCarData.karobka}
              type="text"
              name="karobka"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Rang:</p>
            <input
              value={newCarData.rang}
              type="text"
              name="rang"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Kraska Holati:</p>
            <input
              value={newCarData.kraska_holati}
              type="text"
              name="kraska_holati"
              onChange={handleInputChange}
            />
          </label>

          <label id="AddAvto">
            <p>Dvigatel:</p>
            <input
              value={newCarData.dvigatel}
              type="text"
              name="dvigatel"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Sana:</p>
            <input
              type="date"
              name="data"
              value={newCarData.data}
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Viewed List:</p>
            <input
              value={newCarData.viewed_list}
              type="number"
              name="viewed_list"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>Yana:</p>
            <input
              value={newCarData.yana}
              type="text"
              name="yana"
              onChange={handleInputChange}
            />
          </label>
          <label id="AddAvto">
            <p>User ID:</p>
            <input
              type="text"
              name="user"
              value={newCarData.user}
              onChange={handleInputChange}
            />
          </label>
          <label id="foto">
            <div className="rasmQoshish">
              <div id="putAPicture">
                <label htmlFor="rasm_uchun">rasm qo`shish</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="rasm_uchun"
                  name="Rasm qo'shish"
                  onChange={handleInputChange}
                  accept="image/*"
                />
              </div>
              <div id="rasmQoshishPText">
                <p>Faylni shu yerga ko`chirib qo`ying.</p>
              </div>
            </div>
          </label>
          <label id="AddAvto">
            <p>Yurgani:</p>
            <div className="Componentinput">
              <input
                value={newCarData.yurgani}
                type="text"
                name="yurgani"
                onChange={handleInputChange}
              />
            </div>
          </label>
          <button type="button" onClick={postData}>
            Add Car Data
          </button>
        </form>
        <label id="AddAvto">
          <p>Shahar:</p>
          <div className="Componentinput">
            <select
              value={newCarData.shahar}
              type="text"
              name="shahar"
              onChange={handleInputChange}
              id=""
            >
              <option value=""></option>
            </select>
          </div>
        </label>
      </div>
      <Footure />
    </div>
  );
};

export default Post;
