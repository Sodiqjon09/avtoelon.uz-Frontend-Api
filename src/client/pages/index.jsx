import Navbar from "../components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarAPi from "../components/carApi/carApi";
import Footure from "../components/Footure/Footure";
import Main from "../components/Main/Main";
import Post from "../components/Post/Post";
// import Post from "../components/Post/Post";
// import Api from '../components/apiTest/ApiTest'
// import ApiTest from "../components/apiTest/ApiTest";
// import Error from "../components/Error404/Error";

const Home = () => {
  return (
    <div>
      <Router>
        {/* <Post /> */}

        {/* <Api /> */}
        <Routes>
          {/* // element={<Post />}/  */}
          <Route path="/post" element={<Post />} />
          <Route path="/mashina" />
          <Route path="/avtozapchat" />
          <Route path="/mashinasozlik" />
          <Route path="/remont" />
        </Routes>
        <div>
          <Navbar />
          <Main />
          <CarAPi />
          <Footure />
        </div>
      </Router>
    </div>
  );
};

export default Home;
