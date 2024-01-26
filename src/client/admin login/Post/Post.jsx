import { useEffect, useState } from "react";
import Loading1 from "../../components/loading/loading";
import AdvertiseText from "../../components/AdvertiseText/AdvertiseText";
import { RangData } from "../../data/PostData/PostData";

const Post = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [engineVolume, setEngineVolume] = useState("");
  const [yearError, setYearError] = useState(false);
  const [enteredYear, setEnteredYear] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState({});

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/all/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xato fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setEnteredYear(year);

    if (year < 1900 || year > 2024) {
      setYearError(true);
    } else {
      setYearError(false);
    }
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;

    if (price > 9999999) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  const twoP1 = document.getElementById("twoP");
  const oneP1 = document.getElementById("oneP");

  const twoP = () => {
    twoP1.style.display = "flex";
    twoP1.style.justifyContent = "center";
    twoP1.style.alignItems = "center";
    twoP1.style.background = "#d6ecfb";
    twoP1.style.border = 0;
    twoP1.style.padding = "0px 3px";
    twoP1.style.width = "100%";
    twoP1.style.height = "25px";
    twoP1.style.color = "#68686c";
    oneP1.style.color = "#0066cc";
    oneP1.style.background = "none";
    oneP1.style.textDecoration = "underline";
  };

  const oneP = () => {
    oneP1.style.display = "flex";
    oneP1.style.justifyContent = "center";
    oneP1.style.alignItems = "center";
    oneP1.style.background = "#d6ecfb";
    oneP1.style.border = 0;
    oneP1.style.padding = "0px 3px";
    oneP1.style.width = "100%";
    oneP1.style.height = "25px";
    oneP1.style.color = "#68686c";
    twoP1.style.color = "#0066cc";
    twoP1.style.background = "none";
    twoP1.style.textDecoration = "underline";
  };

  const handleInputChange = (e, setFunction, validationFunction) => {
    const inputValue = e.target.value;

    if (!engineVolume && inputValue.length === 1) {
      setFunction(inputValue);
    } else if (validationFunction(inputValue)) {
      setFunction(inputValue);
    }
  };

  const validateEngineVolume = (input) =>
    /^\d+(\.\d+)?$/.test(input) &&
    parseFloat(input) >= 0.1 &&
    parseFloat(input) <= 9.0;

  const handleYurganiChange = (event) => {
    const value = event.target.value;

    if (!isNaN(value)) {
      setInputValue(value);

      setTimeout(() => {
        if (parseInt(value) > 9999999) {
          setInputValue("");
        }
      }, 2000);
    }
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);

    const citiesForRegion = getCitiesForRegion(region);

    setCities({ ...cities, [region]: citiesForRegion });
    setSelectedCity("");
  };

  const getCitiesForRegion = (region) => {
    const cityMapping = {
      "Toshkent viloyati": [
        { id: 1, name: "Toshkent Shaxar" },
        { id: 2, name: "Bekobod" },
        { id: 3, name: "Chirchiq" },
      ],
      "Namangan viloyati": [
        { id: 4, name: "Namangan Shaxari" },
        { id: 5, name: "Chust" },
        { id: 6, name: "Kosonsoy" },
      ],
    };

    return cityMapping[region] || [];
  };

  const regions = ["Toshkent viloyati", "Namangan viloyati"];

  return (
    <>
      {loading ? (
        <Loading1 />
      ) : (
        <div id="Post">
          <div className="content">
            <div>
              <h2>Add Avto</h2>
              <h2>Add Avto</h2>
            </div>
          </div>
          <AdvertiseText />
          <div id="AddAvto" name="Marka va model">
            <p>Marka va model*</p>
            <select id="markaModel" name="markaModel">
              {data?.[3]?.map((el) => (
                <option key={el.id}>{el.name}</option>
              ))}
            </select>
          </div>
          <div id="AddAvto" className="AddAvtoTwo" name="Yili">
            <div>
              <p>Yili*</p>
            </div>
            <div className="yili">
              <input
                type="number"
                id="yearInput"
                placeholder=""
                value={enteredYear}
                onChange={handleYearChange}
              />
              {yearError && (
                <p
                  style={{
                    color: "red",
                    fontSize: ".8461538462em",
                    width: "100%",
                  }}
                >
                  Yilni 1900 dan kam yoki 2024 dan ko`p kiriting! 2020 ga
                  tenglashtirilmoqda.
                </p>
              )}
            </div>
          </div>
          <div id="AddAvto" className="AddAvtoTwo" name="Narxi">
            <div>
              <p>Narxi*</p>
            </div>
            <div className="yili" id="Narxi">
              <div className="NarxiP">
                <input
                  type="number"
                  id="yeInput"
                  placeholder=""
                  onChange={handlePriceChange}
                />
                {priceError && (
                  <p
                    style={{
                      color: "red",
                      fontSize: ".8461538462em",
                      width: "9.4em",
                    }}
                  >
                    1 000 000 dan kam summa kiriting
                  </p>
                )}
              </div>
              <div id="money">
                <p id="oneP" onClick={oneP}>
                  so`m
                </p>
                <p id="twoP" onClick={twoP}>
                  y.e.
                </p>
              </div>
            </div>
          </div>
          <div id="AddAvto" name="Savdolashuv">
            <p>Savdolashuv</p>
            <select id="markaModel" name="markaModel">
              <option>Yoq</option>
              <option>Savdolashuv bor</option>
            </select>
          </div>
          <div id="AddAvto" className="AddAvtoTwo" name="Dvigatel hajmi">
            <div>
              <p>Dvigatel hajmi</p>
            </div>
            <div className="yili">
              <input
                type="number"
                id="engineVolume"
                value={engineVolume}
                onChange={(e) =>
                  handleInputChange(e, setEngineVolume, validateEngineVolume)
                }
                placeholder=""
                step="0.1"
              />
              <p
                style={{
                  color: "#666",
                  fontSize: ".8461538462em",
                  width: "100%",
                }}
              >
                . qilib yozing
              </p>
            </div>
          </div>
          <div id="AddAvto" name="Yoqilg'i turi*">
            <div>
              <p>Yoqilg`i turi*</p>
            </div>
            <div className="Yoqilgi">
              <select name="" id="">
                <option value="">Benzin</option>
                <option value="">Gaz-benzin</option>
                <option value="">Dizel</option>
                <option value="">Elektr</option>
                <option value="">Gibrid</option>
                <option value="">Gaz</option>
              </select>
            </div>
          </div>
          <div id="AddAvto" name="Uzatish qutisi*">
            <div>
              <p>Uzatish qutisi*</p>
            </div>
            <div className="uzatishQutisi">
              <select name="" id="">
                <option value="">Mexanik</option>
                <option value="">Avtomat</option>
                <option value="">Tiptronik</option>
                <option value="">Variator</option>
                <option value="">Robot</option>
              </select>
            </div>
          </div>
          <div id="AddAvto" name="Yurgani">
            <div>
              <p>Yurgani</p>
            </div>
            <div id="yurgani">
              <input
                type="number"
                value={inputValue}
                onChange={handleYurganiChange}
              />
              <div className="kmP">
                <p>km</p>
              </div>
              <div id="postTextSmallP">
                <p>9999999 dan kam son kiritin</p>
              </div>
            </div>
          </div>
          <div id="AddAvto" name="rang">
            <div>
              <p>rang</p>
            </div>
            <div>
              <select name="" id="">
                {RangData?.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div id="AddAvto" name="Kraska xolati">
            <div>
              <p>Kraska xolati</p>
            </div>
            <div>
              <select name="" id="">
                <option value="">Kraska bor</option>
                <option value="">Kraska toza</option>
                <option value="">Pyatno bor</option>
                <option value="">To`liq kraskalangan</option>
              </select>
            </div>
          </div>
          <div id="AddAvto" className="yana" name="yana">
            <div>
              <p>Qo` shimcha malumot</p>
            </div>
            <div className="textarea">
              <textarea maxLength={2000} name="max" id=""></textarea>
            </div>
          </div>
          <div id="AddAvto" className="RasmTop" name="Rasm">
            <div>
              <p>Rasm</p>
            </div>
            <div id="foto">
              <div className="rasmQoshish">
                <div id="putAPicture">
                  <label htmlFor="rasm_uchun">rasm qo`shish</label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="rasm_uchun"
                    name="Rasm qo'shish"
                  />
                </div>
                <div id="rasmQoshishPText">
                  <p>Faylni shu yerga ko`chirib qo`ying.</p>
                </div>
              </div>
              <div id="fotoText">
                <p>
                  Formati - JPEG yoki PNG, hajmi - 10 megabaytdan ortiq emas.
                </p>
                <p>
                  Rasmlar ketma-ketligini ularni bir joydan ikkinchi joyga olib
                  o`tgan holda o`zgartirish mumkin.
                </p>
              </div>
            </div>
          </div>

          <div id="ContactInformation" name="Aloqa ma'lumotlari">
            <div id="ContactWord">
              <h1>Aloqa ma`lumotlari</h1>
            </div>
            <div id="regionalInformation">
              <div id="viloyatlar">
                <div>
                  <p>Viloyat*</p>
                </div>
                <select
                  name="viloyat"
                  id="viloyat"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                >
                  <option value="">Tanlash</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div id="shaxarTumanlar">
                <div>Shaxar*</div>
                <div>
                  {selectedRegion && (
                    <>
                      <select name="" id="">
                        {cities[selectedRegion]?.map((city) => (
                          <option
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            key={city.id}
                            name={city.name}
                            id={city.id}
                          >
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
