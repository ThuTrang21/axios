import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import path from "./utils/path";
import { Post } from "./pages/post";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.POST} element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
