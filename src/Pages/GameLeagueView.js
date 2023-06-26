import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./../Assets/Css/table.css";
import Popup from "../Components/Common/Popup";
import { toast } from "react-toastify";
import {
  useLeagueGetQuery,
  useDeleteLeagueMutation,
  useGetOneLeagueMutation,
} from "../slices/leagueAPi";
import { useGetGameQuery } from "../slices/gameApi";
import { useGetGameModeQuery } from "../slices/gameModeApi";
const GameLeagueView = () => {
  const [modal, setModal] = useState(false);
  const [selectedGameLeagueId, setSelectedGameLeagueId] = useState(null);
  const { data, isLoading, isError } = useLeagueGetQuery();
  const gameLeague = data?.data?.data || [];
  const { currentData } = useGetGameQuery();
  const gameinfo = currentData?.data?.data || [];
  const { data: gameModeData } = useGetGameModeQuery();
  const { refetch } = useLeagueGetQuery();
  const gameMode = gameModeData?.data?.data || [];
  const [deleteLeague] = useDeleteLeagueMutation();
  const [getOneLeague] = useGetOneLeagueMutation();
  const getGameName = (gameTypeId) => {
    const game = gameinfo?.find((game) => game._id === gameTypeId);
    return game ? game.title : "";
  };
  const getGameMode = (gameModeId) => {
    const game = gameMode?.find((game) => game.gameType === gameModeId);
    return game ? game.modeTitle : "";
  };
  const handleDelete = async (id) => {
    try {
      await deleteLeague(id).unwrap();
      refetch();
      toast.success("Document successfully deleted");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleEdit = (id) => {
    getOneLeague(id)
      .unwrap()
      .then((response) => {
        const gameData = response.data;
        setSelectedGameLeagueId(gameData);
        setModal(true);
      })
      .catch((error) => {
        console.log("Error occurred while fetching game data:", error);
      });
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
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Game Title</th>
                <th>Mode Title</th>
                <th>League Title</th>
                <th>Investable Budget</th>
                <th>Membership Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gameLeague.length > 0 ? (
                gameLeague.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{getGameName(item.gameType)}</td>
                      <td>{getGameMode(item.gameMode)}</td>
                      <td>{item.leagueTitle}</td>
                      <td>{item.investableBudget}</td>
                      <td>{item.membershipType}</td>
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
                          view="leagueView"
                          onHide={() => setModal(false)}
                          selectedGameLeagueId={selectedGameLeagueId}
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
  );
};

export default GameLeagueView;
