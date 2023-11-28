import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Model(props) {
  console.log(props.modelData);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const update = () => {
    fetch(
     `https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=update&table=crud_table&id=${props.modelData.id}&name=${props.modelData.name}&email=${props.modelData.email}&password=${props.modelData.password}&dob=${props.modelData.dob}&gender=${props.modelData.gender}&language=${props.modelData.language}&state=${props.modelData.state}`,
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
        console.log(task)
      })    
      .catch((error) => {
        console.log(error);
      }).then(()=> {
        props.setRefresh(!props.refresh);
      })

      props.modelClose();
     
  }

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
        console.log(task)
      })    
      .catch((error) => {
        console.log(error);
      }).then(()=> {
        props.setRefresh(!props.refresh);
      })
      props.modelClose();
  }


  const updateData = () => {
    // props.modelUpdate();
    props.modelClose();
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.modelShow} onHide={props.modelClose} size="lg" centered >
        <Modal.Header closeButton>
          <Modal.Title className='fs-2'> Edit Data ✍ </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>First Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={props.modelData ? props.modelData.name : false}
                onChange={(e)=> props.setModelData({...props.modelData,name: e.target.value})}
                placeholder="Enter your name..."
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>EmailId</Form.Label>
              <Form.Control
                type="email"
                defaultValue={props.modelData?props.modelData.email:false}
                onChange={(e)=> props.setModelData({...props.modelData,email: e.target.value})}
                placeholder="Enter your Email..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={props.modelData ? props.modelData.password : false}
                onChange={(e)=> props.setModelData({...props.modelData,password: e.target.value})}
                placeholder="Enter your password..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                defaultValue={props.modelData ? props.modelData.dob : false}
                onChange={(e)=> props.setModelData({...props.modelData,dob: e.target.value})}
                placeholder="Enter your Education..."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>Gender</Form.Label>
              <Form.Control
              defaultValue={props.modelData ? props.modelData.gender : false}
              onChange={(e)=> props.setModelData({...props.modelData,gender: e.target.value})}
                type="text"
                placeholder="Enter your Qualification..."
              />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>Language</Form.Label>
              <Form.Control
              defaultValue={props.modelData ? props.modelData.language : false}
              onChange={(e)=> props.setModelData({...props.modelData,language: e.target.value})}
                type="text"
                placeholder="Enter your Qualification..."
              />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fw-bold'>State</Form.Label>
              <Form.Control
              defaultValue={props.modelData ? props.modelData.state : false}
              onChange={(e)=> props.setModelData({...props.modelData,state: e.target.value})}
                type="text"
                placeholder="Enter your Qualification..."
              />
            </Form.Group>            

        </Form>
        
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={props.modelClose}>
            Close
          </Button>
          {props.modelData.id === ""? <Button variant="warning" onClick={create}>
            Insert Data
          </Button>  : <Button variant="warning" onClick={update}>
            Save Changes
          </Button>}
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;