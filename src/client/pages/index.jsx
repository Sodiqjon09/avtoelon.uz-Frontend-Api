import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footure from "../components/Footure/Footure";
import Post from "../admin login/Post/Post";
import IndexJsx from "../../client/pages/index";
import Main from "../components/Main/Main";
import CarAPi from "../components/carApi/carApi";
const Home = () => {
  const isPostPage = window.location.pathname === "/post";

  return (
    <div>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route
          path="/"
          element={
            isPostPage ? (
              <Navigate to="/post" />
            ) : (
              <>
                {/* Bu joyda hech narsa chiqmasin */}
                <Navbar />
                <Main />
                <CarAPi />
                <Footure />
              </>
            )
          }
        />
        <Route path="/mashinasozlik" element={<IndexJsx />} />
        <Route path="/mashina" />
        <Route path="/avtozapchat" />
        <Route path="/remont" />
      </Routes>
    </div>
  );
};

export default Home;
