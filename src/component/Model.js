import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Model(props) {
  // console.log(props.modelData);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const update = () => {
    fetch(
      `https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=update&table=crud_table&id=${props.modelData.id}&name=${props.modelData.name}&email=${props.modelData.email}&password=${props.modelData.password}&dob=${props.modelData.dob}&gender=${props.modelData.gender}&language=${props.modelData.language}&state=${props.modelData.state}`,
      {
        method: "POST",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        // console.log(task);
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        props.setRefresh(!props.refresh);
      });

    props.modelClose();
  };

  const create = () => {
    fetch(
      ` https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=create&table=crud_table&name=${props.modelData.name}&email=${props.modelData.email}&password=${props.modelData.password}&dob=${props.modelData.dob}&gender=${props.modelData.gender}&language=${props.modelData.language}&state=${props.modelData.state}`,
      {
        method: "POST", // or PATCH
        // headers: { "content-type": "application/json" },
        // body: JSON.stringify(props.modelData)
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        // console.log(task);
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        props.setRefresh(!props.refresh);
      });
    props.modelClose();
  };

  const updateData = () => {
    // props.modelUpdate();
    props.modelClose();
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    else{
      {props.modelData.id === "" ? create() :update()}
    }

    setValidated(true);
  };
  // console.log(props.modelData);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={props.modelShow}
        onHide={props.modelClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-2"> Edit Data ✍ </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form  onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={props.modelData ? props.modelData.name : false}
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    name: e.target.value,
                  })
                }
                placeholder="Enter your name..."
                autoFocus
                required
              />
              <Form.Control.Feedback type="invalid">
            Please provide a Name !
          </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">EmailId</Form.Label>
              <Form.Control
                type="email"
                defaultValue={props.modelData ? props.modelData.email : false}
                required
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    email: e.target.value,
                  })
                }
                placeholder="Enter your Email..."
              />
               <Form.Control.Feedback type="invalid">
            Email format wrong !
          </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={
                  props.modelData ? props.modelData.password : false
                }
                required
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    password: e.target.value,
                  })
                }
                placeholder="Enter your password !"
              />
                <Form.Control.Feedback type="invalid">
            Please Enter password
          </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                required
                defaultValue={props.modelData ? props.modelData.dob : false}
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    dob: e.target.value,
                  })
                }
                placeholder="Enter your Date Of Birth..."
              />
                <Form.Control.Feedback type="invalid">
            Please Enter DateOfBirth
          </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label className="fw-bold">Gender</Form.Label>
              {/* <Form.Control
                required
                defaultValue={props.modelData ? props.modelData.gender : false}
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    gender: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter your Gender..."
              /> */}
<form class="row g-3 needs-validation" novalidate>
<div class="form-check">
  
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    gender: e.target.value,
                  })}/>
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    gender: e.target.value,
                  })} />
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Others" onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    gender: e.target.value,
                  })}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Others
  </label>
</div>
</form>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Language</Form.Label>
              {/* <Form.Control
                defaultValue={
                  props.modelData ? props.modelData.language : false
                }
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    language: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter your Language..."
              /> */}
              <Form.Select aria-label="select language"  onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    language: e.target.value,
                  })}>
                    
                    {/* <option >Select Language</option> */}
                <option value="Tamil">Tamil</option>
       
      <option  value="English">English</option>
      <option  value="Hindi">Hindi</option>
      <option value="Other Language">Other Language</option>
    </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">State</Form.Label>
              {/* <Form.Control
                defaultValue={props.modelData ? props.modelData.state : false}
                onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    state: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter your State..."
              /> */}
                <Form.Select aria-label="select State" required onChange={(e) =>
                  props.setModelData({
                    ...props.modelData,
                    state: e.target.value,
                  })}>
                {/* <option>Select State</option> */}
                <option value="TamilNadu">TamilNamdu</option>
                <option  value="Kerala">Kerala</option>
                <option  value="AndraPradesh">AndraPradesh</option>
                <option  value="Karnataka">Karnataka</option>
                <option  value="Telangana">Telangana</option>
                <option  value="Goa">Goa</option>
                <option  value="Punjab">Punjab</option>
                <option  value="Maharashtra">Maharashtra</option>
                <option  value="Gujarat">Gujarat</option>
                <option  value="Bihar">Bihar</option>
                <option  value="Odisha">Odisha</option>
    </Form.Select>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={props.modelClose}>
            Close
          </Button>
          {/* {props.modelData.id === "" ? (
            <Button variant="warning" onClick={create}>
              Insert Data
            </Button>
          ) : (
            <Button variant="warning" onClick={update}>
              Save Changes
            </Button>
          )} */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
