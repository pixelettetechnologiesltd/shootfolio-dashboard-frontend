import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./../Assets/Css/table.css";
import Popup from "../Components/Common/Popup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Menu from "../Components/Menu";
import {
  useDeleteGameMutation,
  useGetOneGameMutation,
  useGetGameQuery,
} from "../slices/gameApi";
import { useSelector } from "react-redux";

const GameTypeView = () => {
  const [modal, setModal] = useState(false);
  const [gameType, setGameType] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const { data, isLoading, isError } = useGetGameQuery();
  const gameinfo = data?.data?.data || [];
  const dispatch = useDispatch();

  const [deleteGame, deleteGameResult] = useDeleteGameMutation();
  const [getOneGame] = useGetOneGameMutation();
  const { defineGame } = useSelector((state) => state.game);
  const { refetch } = useGetGameQuery();
  const handleDelete = async (id) => {
    try {
      const res = await deleteGame(id).unwrap();
      //dispatch(removeGame({ id: res.data }));
      toast.success("Document successfully deleted");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleEdit = (id) => {
    getOneGame(id)
      .unwrap()
      .then((response) => {
        const gameData = response.data;
        setSelectedGameId(gameData);
        setModal(true);
      })
      .catch((error) => {
        console.log("Error occurred while fetching game data:", error);
      });
  };

  return (
    <div>
    <Menu/>
    <Container fluid className="sidebar">
      <Row className="h-100">
        <Col
          xs={3}
          sm={3}
          md={3}
          lg={2}
          xl={2}
          style={{ backgroundColor: "#1B1B1B" }}
        >
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9} sm={9} md={9} lg={10} xl={10} style={{ marginTop: "30px" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Game Title</th>
                <th>Icon Url</th>
                <th>Quiz Access</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gameinfo?.length > 0 ? (
                gameinfo?.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.iconUrl}</td>
                      <td>{item.quizAccess}</td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          className="table_button"
                          type="submit"
                          onClick={() => handleEdit(item._id)}
                        >
                          Edit
                        </button>
                        <Popup
                          show={modal}
                          view="typeView"
                          onHide={() => setModal(false)}
                          selectedGameId={selectedGameId}
                        />
                        <button
                          className="table_button"
                          type="button"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">No data available</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default GameTypeView;
