import React, { useState } from 'react'

const AddUser = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [dob,setDob]=useState();
    const [gender,setGender]=useState();
    const [language,setLanguage]=useState();
    const [state,setState]=useState();
    
  return (
    <div className='adduser'>
        <form>
        <div className="addusercontainer">
            <h1> Add User Form</h1>
  <div className="mb-3">
    <label for="username" className="form-label">Name</label>
    <input type="text" className="form-control" id="username" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="useremail" className="form-label">Email</label>
    <input type="Email" className="form-control" id="useremail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="userpasswor" className="form-label">password</label>
    <input type="text" className="form-control" value={pass} onChange={(e)=>setPass(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="userdob" className="form-label">dob</label>
    <input type="text" className="form-control" value={dob} onChange={(e)=>setDob(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="usergender" className="form-label">Gender</label>
    <input type="text" className="form-control" value={gender} onChange={(e)=>setGender(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="userlanguage" className="form-label">Language</label>
    <input type="text" className="form-control" value={language} onChange={(e)=>setLanguage(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="userstate" className="form-label">state</label>
    <input type="text" className="form-control" value={state} onChange={(e)=>setState(e.target.value)}/>
  </div>
 
 
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default AddUser