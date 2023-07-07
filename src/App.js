import React from "react";
import "./Assets/Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Pages/Loginform";
import Index from "./Pages/Index";
import store from "./store";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Setting from "./Pages/Setting";
import PrivateRoute from "./Components/PrivateRoute";
import Shootfolioclubs from "./Pages/Shootfolioclubs";
import Addnewclub from "./Pages/Addnewclub";
import Addportfolioclub from "./Pages/Addportfolioclub";
import Defineleaguetype from "./Pages/Defineleaguetype";
import Addnewleague from "./Pages/Addnewleague";
import Addgameplaymode from "./Pages/Addgameplaymode";
import Editclub from "./Pages/Editnewclub";
import Viewportfolio from "./Pages/Viewportfolio";
import Editportfolioclub from "./Pages/Editportfolioclub";
import Editleague from "./Pages/Editleague";
import Gametype from "./Pages/Gametype";
import Addgametype from "./Pages/Addgametype"
import Editgametype from "./Pages/Editgametype";
import Assetmanagement from "./Pages/Assetmanagement";
import Subscription from "./Pages/Subscription";
import Gameplaymode from "./Pages/Gameplaymode";
import Editgameplaymode from "./Pages/Editgameplaymode";
import Addsubscriptionplan from "./Pages/Addsubscriptionplan";
import Editsubscriptionplan from "./Pages/Editsubscriptionplan ";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            
              <Route path="/Dashboard/game/shootfolioclubs" element={<Shootfolioclubs/>}></Route>
              <Route path="/Dashboard/game/addnewclub" element={<Addnewclub/>}></Route>
              <Route path="/Dashboard/game/editclub" element={<Editclub/>}></Route>
              <Route path="/Dashboard/game/addportfolioclub" element={<Addportfolioclub/>}></Route>
              <Route path="/Dashboard/game/addnewleague" element={<Defineleaguetype/>}></Route>
              <Route path="/Dashboard/game/editleague" element={<Editleague/>}></Route>
              <Route path="/Dashboard/game/gameleague" element={<Addnewleague/>}></Route>
              <Route path="/Dashboard/game/addgameplaymode" element={<Addgameplaymode/>}></Route>
              <Route path="/Dashboard/game/viewportfolio" element={<Viewportfolio/>}></Route>
              <Route path="/Dashboard/game/Editportfolioclub" element={<Editportfolioclub/>}></Route>
              <Route path="/Dashboard/game/gametype" element={<Gametype/>}></Route>
              <Route path="/Dashboard/game/addnewgame" element={<Addgametype/>}></Route>
              <Route path="/Dashboard/game/editgametype" element={<Editgametype/>}></Route>
              <Route path="/Dashboard/game/assetmanagement" element={<Assetmanagement/>}></Route>
              <Route path="/Dashboard/game/subscription" element={<Subscription/>}></Route>
              <Route path="/Dashboard/game/gameplaymode" element={<Gameplaymode/>}></Route>
              <Route path="/Dashboard/game/editgameplaymode" element={<Editgameplaymode/>}></Route>
              <Route path="/Dashboard/addsubscriptionplan" element={<Addsubscriptionplan/>}></Route>
              <Route path="/Dashboard/editsubscriptionplan" element={<Editsubscriptionplan/>}></Route>







              <Route path="/" element={<Index />}>
              <Route path="/" element={<Login />}></Route>
              <Route path="/" element={<PrivateRoute/>}>
              <Route path="/Dashboard" element={<Home />}></Route>
              <Route path="/Dashboard/users" element={<Users />}></Route>
              <Route path="/Dashboard/setting" element={<Setting />}></Route>

            </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
