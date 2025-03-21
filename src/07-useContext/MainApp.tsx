import { Navigate, Route, Routes} from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UserProvider>
  );
};
