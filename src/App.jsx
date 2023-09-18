import { Route, Routes } from "react-router-dom";
import "../src/style/App.css";
import HomePage from "./pages/HomePage";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
