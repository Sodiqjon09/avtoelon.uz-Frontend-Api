import "./footure.css";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FootureData1 } from "../../data/Footure/Footure";
import { FootureData2 } from "../../data/Footure/Footure";
import Play from "../../assets/imgs/4.png";

const Footure = () => {
  const iconSize = 35;
  return (
    <footer>
      <div id="footurData">
        <div id="footerAData">
          {FootureData1?.map((data, index) => {
            return (
              <div key={data.id}>
                <p className={index === 0 ? "first-element" : ""}>
                  {data.name}
                </p>
              </div>
            );
          })}
        </div>
        <div id="footerTwoData">
          {FootureData2?.map((data) => {
            return (
              <div key={data.id}>
                <p>{data.name}</p>
              </div>
            );
          })}
          <div id="FooturImg">
            <img
              src="https://avtoelon.uz/static/frontend/images/svg/app-store.svg"
              alt=""
            />

            <img src={Play} alt="" />
            <img
              src="https://avtoelon.uz/static/frontend/images/promo/appgallery.png"
              alt=""
            />
          </div>
        </div>
        <div id="footureThreeData">
          <div>
            <p>Yangiliklarimiz bilan tanishib boringp</p>
          </div>
          <div id="FootureData">
            <div id="icon">
              <FaFacebookSquare size={iconSize} style={{ cursor: "pointer" }} />
            </div>
            <div id="icon">
              <FaInstagramSquare
                size={iconSize}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div id="icon">
              <BsTelegram size={iconSize} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footure;
