import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Write from "./pages/Write";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
}

export default App;
