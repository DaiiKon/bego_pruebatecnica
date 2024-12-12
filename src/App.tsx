import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upcoming from "./pages/Upcoming";
import CargoDetails from "./pages/CargoDetails";
import CargoOrdersActive from "./pages/CargoOrdersActive";
import CargoDetailsUpcomingActive from "./pages/CargoOrdersActive";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upcoming />} />
        <Route path="/cargo-details/:orderId" element={<CargoDetails />} />
        <Route path="/cargo-orders" element={<CargoOrdersActive />} />
        <Route path="/cargo-details-active/:orderId" element={<CargoDetailsUpcomingActive />} />
      </Routes>
    </Router>
  );
}

export default App;
