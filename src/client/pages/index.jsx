import Navbar from "../components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarAPi from '../components/carApi/carApi'

import Mashina from '../components/Mashina/Mashina'
import Avtozapchat from '../components/Avtozapchat/Avtozapchat'
import Mashinasozlik from '../components/Mashinasozlik/Mashinasozlik'
import Remont from '../components/Remont/Remont'
import Footure from "../components/Footure/Footure";
import Main from "../components/Main/Main";

const Home = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Main />
        <CarAPi />
        <Footure />
        <Routes>
          <Route path="/mashina" element={<Mashina />} />
          <Route path="/avtozapchat" element={<Avtozapchat />} />
          <Route path="/mashinasozlik" element={<Mashinasozlik />} />
          <Route path="/remont" element={<Remont />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;