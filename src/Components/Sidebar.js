import React, { useState } from "react";
import "../Assets/Css/Sidebar.css";
import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  FaClipboardList,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaRegUser,
  FaGamepad,
  FaArrowRight,
} from "react-icons/fa";
import { RxDashboard} from "react-icons/rx";
import { BiFootball } from "react-icons/bi";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(() => {
    const storedSubMenuVisible = localStorage.getItem("isSubMenuVisible");
    return storedSubMenuVisible ? JSON.parse(storedSubMenuVisible) : false;
  });

  const handleSubMenuToggle = (e) => {
    e.preventDefault();
    const updatedSubMenuVisible = !isSubMenuVisible;
    setIsSubMenuVisible(updatedSubMenuVisible);
    localStorage.setItem(
      "isSubMenuVisible",
      JSON.stringify(updatedSubMenuVisible)
    );
  };
  const handleSidebarItemClick = () => {
    localStorage.setItem("isSubMenuVisible", JSON.stringify(false));
  };
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav className="flex-column">
        <Nav.Item>
          <NavLink
            to="/dashboard/"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing"><RxDashboard /></span>
            <span className="dashboard-text">Dashboard</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/dashboard/users"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing"><FaRegUser/></span>
            <span className="dashboard-text">Manage Users</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/dashboard/game/shootfolioclubs"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing"><BiFootball/></span>
            <span className="dashboard-text">Shootfolio Club</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/dashboard/performance"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <FaChartLine />
            <span className="dashboard-text">Performance</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            onClick={handleSubMenuToggle}
            to="/dashboard/game"
            className="nav-link"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <FaGamepad />
            <span className="dashboard-text">Game Setup</span>  
          </NavLink>
          <div className={`subMenu${isSubMenuVisible ? "show" : "hide"}`}>
            {isSubMenuVisible && (
              <>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/game-add"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">Game Type</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/view-gameType"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">View Game Type</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/game-modes"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">Game Mode</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/view-gameMode"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">View Game Mode</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/game-league"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">Game Leagues</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/viewgame-league"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">View Game Leagues</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/club-team"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">Club Team</span>
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    to="/dashboard/game/view-clubteam"
                    className="nav-linkSubitem"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "white" : "#808080",
                      };
                    }}
                  >
                    <FaArrowRight style={{ marginRight: "5px" }} />
                    <span className="dashboard-text">View Club Team</span>
                  </NavLink>
                </Nav.Item>
              </>
            )}
          </div>
        </Nav.Item>
      
        <div className="settings">
          <Nav.Item>
            <NavLink
              to="/dashboard/setting"
              className="nav-link"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "black" : "#808080",
                  backgroundColor: isActive ? "#2A7741" : "",
                };
              }}
            >
              <FaCog />
              <span className="dashboard-text">Settings</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <Button
              style={{ width: "90%" }}
              onClick={handleLogout}
              className="nav-link"
            >
              <FaSignOutAlt />
              <span className="dashboard-text">Logout</span>
            </Button>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
};

export default Sidebar;
