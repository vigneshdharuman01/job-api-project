import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loginpage from './component/Loginpage';
import AddUser from './component/AddUser';
import List from './component/List';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
