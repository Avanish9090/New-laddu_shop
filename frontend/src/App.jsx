import "./index.css";
import { Route, Routes } from "react-router-dom";
import Userhome from "./user/Userhome";
import Home from "./adminComponents/Home";
import Orders from "./adminComponents/Orders";
import OrderNow from "./components/OrderNow";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminReview from "./adminComponents/AdminReview";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Contacts from "./adminComponents/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Userhome />} />
        <Route path="/home" element={<Userhome />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              {" "}
              <Orders />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              {" "}
              <AdminReview />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              {" "}
              <Contacts />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="/order" element={<OrderNow />} />
      </Routes>
    </>
  );
}

export default App;
