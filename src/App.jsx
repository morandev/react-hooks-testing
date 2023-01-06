import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/AboutPage";
import Navbar from "./components/navbar/Navbar";
import UserProvider from "./context/userContext/UserProvider";

const App = () => {
     return (
          <UserProvider>
               <h1>Main App</h1>
               <Navbar />
               <hr />
               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="/*" element={<Navigate to="/" />} />
               </Routes>
          </UserProvider>
     );
};

export default App;
