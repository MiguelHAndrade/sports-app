import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Sport } from "./pages/Sport";

import "./global.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
          <div className="body-container">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/sport/:id" element={<Sport />} />
            </Routes>
          </div>
        <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
