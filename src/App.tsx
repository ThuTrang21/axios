import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import path from "./utils/path";
import { Product } from "./pages/product/Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.PRODUCT} element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
