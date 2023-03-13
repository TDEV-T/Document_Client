// import { Container, Row, Col, Button, FormGroup, Form,FormLabel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";


//Page
import SignIn from "./components/General/Login";
import SignUp from "./components/General/SignUp";
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
