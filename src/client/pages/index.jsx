import Navbar from "../components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarAPi from "../components/carApi/carApi";
import Footure from "../components/Footure/Footure";
import Main from "../components/Main/Main";
// import Api from '../components/apiTest/ApiTest'
// import ApiTest from "../components/apiTest/ApiTest";
// import Error from "../components/Error404/Error";

const Home = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Main />
        <CarAPi />
        <Footure />
        {/* <Api /> */}
        <Routes>
          <Route path="/mashina" />
          <Route path="/avtozapchat" />
          <Route path="/mashinasozlik" />
          <Route path="/remont" />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
