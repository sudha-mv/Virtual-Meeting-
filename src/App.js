import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Room from "./components/Room";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Room/>} path="/room/:roomId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
