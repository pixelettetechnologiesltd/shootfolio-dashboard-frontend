import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./../Assets/Css/table.css";
import Popup from "../Components/Common/Popup";
import {
  useGetGameModeQuery,
  useDeleteGameModeMutation,
  useGetOneGameModeMutation,
} from "../slices/gameModeApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useGetGameQuery } from "../slices/gameApi";

const GameModesView = () => {
  const [modal, setModal] = useState(false);
  const [selectedGameModeId, setSelectedGameModeId] = useState(null);
  const { data, isLoading, isError } = useGetGameModeQuery();
  const gameMode = data?.data?.data;
  const { refetch } = useGetGameModeQuery();
  const { currentData } = useGetGameQuery();

  const gameinfo = currentData?.data?.data || [];

  const [deleteGameMode, deleteGameResult] = useDeleteGameModeMutation();
  const [getOneGameMode] = useGetOneGameModeMutation();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await deleteGameMode(id).unwrap();
      refetch();
      toast.success("Document successfully deleted");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleEdit = (id) => {
    getOneGameMode(id)
      .unwrap()
      .then((response) => {
        const gameData = response.data;
        setSelectedGameModeId(gameData);
        setModal(true);
      })
      .catch((error) => {
        console.log("Error occurred while fetching game data:", error);
      });
  };

  const getGameName = (gameTypeId) => {
    const game = gameinfo?.find((game) => game._id === gameTypeId);
    return game ? game.title : "";
  };

  return (
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
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error occurred while fetching data.</div>
          ) : (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Game Title</th>
                  <th>Game Mode</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {gameMode.length > 0 ? (
                  gameMode.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>{getGameName(item.gameType)}</td>
                        <td>{item.modeTitle}</td>
                        <td>{item.status}</td>
                        <td>
                          <button
                            className="table_button"
                            type="button"
                            onClick={() => handleEdit(item._id)}
                          >
                            Edit
                          </button>
                          <Popup
                            show={modal}
                            view="modeView"
                            onHide={() => setModal(false)}
                            selectedGameModeId={selectedGameModeId}
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
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GameModesView;
