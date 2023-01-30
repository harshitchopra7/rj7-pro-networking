import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";
import FeedDescriptionPage from "./pages/FeedDescriptionPage/FeedDescriptionPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route
            exact
            path="/feed-description/:id"
            element={<FeedDescriptionPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
