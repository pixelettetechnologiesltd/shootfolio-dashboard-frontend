import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./../Assets/Css/table.css";
import Popup from "../Components/Common/Popup";
import { useGetClubQuery,useGetOneClubMutation } from "../slices/clubApi";
import { useGetGameQuery } from "../slices/gameApi";
import { useDeleteClubMutation } from "../slices/clubApi";
import { toast } from "react-toastify";
const ClubTeamView = () => {
  const [modal, setModal] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState(null);
  const { data,isLoading,isError,refetch } = useGetClubQuery();
  const clubinfo = data?.data?.data || [];
  const { currentData } = useGetGameQuery();
  const gameinfo = currentData?.data?.data || [];
  const [deleteClub] = useDeleteClubMutation();
  const getGameName = (gameTypeId) => {
    const game = gameinfo?.find((game) => game._id === gameTypeId);
    return game ? game.title : "";
  };
  const handleDelete =async(id)=>{
    try {
      const res = await deleteClub(id).unwrap();
      //dispatch(removeGame({ id: res.data }));
      toast.success("Document successfully deleted");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  }
  const [getOneClub]=useGetOneClubMutation();
  const handleEdit=(id)=>{
    getOneClub(id)
      .unwrap()
      .then((response) => {
        const gameData = response.data;
        setSelectedClubId(gameData);
        setModal(true);
      })
      .catch((error) => {
        console.log("Error occurred while fetching game data:", error);
      });
  }
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

                <th>Club Team Title</th>
                <th>Symbol</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {clubinfo?.length > 0 ? (
                clubinfo?.map((item) => {
                  return (
                    <tr key={item._id}>
                       <td>{getGameName(item.gameType)}</td>
                      <td>{item.title}</td>
                      <td>{item.Symbol}</td>
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
                          view="clubView"
                          onHide={() => setModal(false)}
                          selectedClubId={selectedClubId}
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

export default ClubTeamView;
