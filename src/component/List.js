import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Model from "./Model";
import { MdAddCircle } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";

function List() {
  const [apiData, setApiData] = useState([]);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);
  const [temp, setTemp] = useState({
    id: "",
    name: "",
    dob: "",
    email: "",
    password: "",
    gender: "",
    language: "",
    state: "",
  });
  const [refresh, setRefresh] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const createData = () => {
    setShow(true);
  };

  const editData = (data) => {
    setShow(true);
    setTemp({
      id: data.id,
      name: data.name,
      dob: data.dob,
      email: data.email,
      password: data.password,
      gender: data.gender,
      language: data.language,
      state: data.state,
    });
    //console.log(data.name);
  };

  const deleteData = (dataId) => {
    fetch(
      `https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=delete&table=crud_table&id=${dataId}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setRefresh(!refresh);
    });
  };

  useEffect(() => {
    console.log("first");
    fetch(
      "https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=read&table=crud_table",
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        console.log(value);
        setApiData(value.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

 // console.log(apiData);
  return (
    <div className={`p-5 ${loader ? "loader" : null}`}>
      {loader ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          <h1> CRUD APP </h1>
          <Table striped bordered hover variant="dark" className="fw-bold">
            <thead>
              <tr>
                <th className="p-3 fs-3">Id</th>
                <th className="p-3 fs-3 ">Name</th>
                <th className="p-3 fs-3">Emailid</th>
                <th className="p-3 fs-3">password</th>
                <th className="p-3 fs-3">Dob</th>
                <th className="p-3 fs-3">Gender</th>
                <th className="p-3 fs-3">Language</th>
                <th className="p-3 fs-3">state</th>
                <th className="p-3 fs-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {apiData?.map((item, index) => {
                return (
                  <tr className="text-center">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.language}</td>
                    <td>{item.state}</td>
                    <td>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => editData(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteData(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <i className="addData" onClick={() => createData()}>
            {" "}
            <MdAddCircle />{" "}
          </i>

          <Model
            modelShow={show}
            modelClose={handleClose}
            modelData={temp}
            setModelData={setTemp}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        </>
      )}
    </div>
  );
}

export default List;
