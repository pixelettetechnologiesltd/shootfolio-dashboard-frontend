import React from "react";
import "./Assets/Css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Pages/Loginform";
import Index from "./Pages/Index";
import store from "./store";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import ManageContent from "./Pages/ManageContent";
import Performance from "./Pages/Performance";
import Setting from "./Pages/Setting";
import GameAdd from "./Pages/GameAdd";
import GameModes from "./Pages/GameModes";
import PrivateRoute from "./Components/PrivateRoute";
import GameLeague from "./Pages/GameLeague";
import ClubTeam from "./Pages/ClubTeam";
import GameTypeView from "./Pages/GameTypeView"
import GameModesView from "./Pages/GameModesView"
import GameLeagueView from "./Pages/GameLeagueView"
import ClubTeamView from "./Pages/ClubTeamView"
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route path="/" element={<Login />}></Route>
              <Route path="/" element={<PrivateRoute/>}>
              <Route path="/Dashboard" element={<Home />}></Route>
              <Route path="/Dashboard/users" element={<Users />}></Route>
              <Route
                path="/Dashboard/manage-content"
                element={<ManageContent />}
              ></Route>
              <Route
                path="/Dashboard/performance"
                element={<Performance />}
              ></Route>
              <Route path="/Dashboard/setting" element={<Setting />}></Route>
              <Route path="/Dashboard/game/game-add" element={<GameAdd/>}></Route>
              <Route path="/Dashboard/game/view-gameType" element={<GameTypeView/>}></Route>
              
              <Route path="/Dashboard/game/game-modes" element={<GameModes/>}></Route>
              <Route path="/Dashboard/game/view-gameMode" element={<GameModesView/>}></Route>
              <Route path="/Dashboard/game/game-league" element={<GameLeague/>}></Route>
              <Route path="/Dashboard/game/viewgame-league" element={<GameLeagueView/>}></Route>
              <Route path="/Dashboard/game/club-team" element={<ClubTeam/>}></Route>
              <Route path="/Dashboard/game/view-clubteam" element={<ClubTeamView/>}></Route>
            </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
