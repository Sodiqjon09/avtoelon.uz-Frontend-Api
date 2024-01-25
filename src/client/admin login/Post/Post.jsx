import { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import AdvertiseText from "../../components/AdvertiseText/AdvertiseText";

const Post = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [yearInput, setYearInput] = useState("");
  const [yeInput, setYeInput] = useState("");
  const [engineVolume, setEngineVolume] = useState("");

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

  useEffect(() => {
    fetch("https://masterphoneuz.pythonanywhere.com/all/")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  const handleInputChange = (e, setFunction, validationFunction) => {
    const inputValue = e.target.value;
    const newValue = validationFunction(inputValue) ? inputValue : "";
    setFunction(newValue);
  };

  const validateYearInput = (input) =>
    /^\d+$/.test(input) &&
    parseInt(input, 10) >= 1998 &&
    parseInt(input, 10) <= 2024;
  const validateYeInput = (input) =>
    /^\d+$/.test(input) &&
    parseInt(input, 10) >= 100 &&
    parseInt(input, 10) <= 1000000;
  const validateEngineVolume = (input) =>
    /^\d+(\.\d+)?$/.test(input) &&
    parseFloat(input) >= 0.1 &&
    parseFloat(input) <= 9.0;

  return (
    <div>
      {loading ? (
        <Loading />
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
                value={yearInput}
                onChange={(e) =>
                  handleInputChange(e, setYearInput, validateYearInput)
                }
                placeholder=""
              />
              <p
                style={{
                  color: "#666",
                  fontSize: ".8461538462em",
                  width: "100%",
                  display:
                    yearInput &&
                    (parseInt(yearInput, 10) < 1998 ||
                      parseInt(yearInput, 10) > 2024)
                      ? "block"
                      : "none",
                  height: "20px",
                }}
              >
                {yearInput &&
                  (parseInt(yearInput, 10) < 1998
                    ? "1998 dan katta son kiriting"
                    : "2024 dan kam son kiriting")}
              </p>
            </div>
          </div>
          <div id="AddAvto" className="AddAvtoTwo" name="Narxi">
            <div>
              <p>Narxi*</p>
            </div>
            <div className="yili">
              <input
                type="number"
                id="yeInput"
                value={yeInput}
                onChange={(e) =>
                  handleInputChange(e, setYeInput, validateYeInput)
                }
                placeholder=""
              />
              <p
                style={{
                  color: "#666",
                  fontSize: ".8461538462em",
                  width: "100%",
                  display:
                    yeInput &&
                    (parseInt(yeInput, 10) < 100 ||
                      parseInt(yeInput, 10) > 1000000)
                      ? "block"
                      : "none",
                  height: "20px",
                }}
              >
                {yeInput &&
                  (parseInt(yeInput, 10) < 100
                    ? "100 у.е.dan kam bo'lmagan summa ko'rsating"
                    : "1 000 000 dan kam bo'lgan summa kiriting")}
              </p>
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
          <div id="AddAvto" className="AddAvtoTwo" name="Yoqilg'i turi*">
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
          <div id="AddAvto" className="AddAvtoTwo" name="Uzatish qutisi*">
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
          <div id="AddAvto" className="AddAvtoTwo" name="Yurgani">
            <div>
              <p>Yurgani</p>
            </div>
            <div id="yurgani">
              <input type="number" />
              <p>km</p>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;