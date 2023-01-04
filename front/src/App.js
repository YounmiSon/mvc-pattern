import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
