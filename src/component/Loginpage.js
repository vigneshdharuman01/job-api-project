import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://zcmsdemo3.desss-portfolio.com/dynamic/dynamic.php?action=chatbot_login&user=${name}&password=${pass}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        // console.log(value);

        if (value.status === 200) {
          setData(value);
          navigate("/list");
          alert("login successfull");
        } else {
          alert("Invalid Data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
        <div className="formcontainer">
          <h2>LOGIN PAGE</h2>
          <div className="mb-3">
            <label for="username" className="form-label">
              username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
