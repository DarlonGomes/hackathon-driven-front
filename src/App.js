import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "./assets/styles/globalStyles";
import SignupPage from "./pages/SignuPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Navbar from "./layout/navbar/Navbar";
import DataProvider from "./context/userContext"

export default function App() {
    return (
        
        <DataProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                    <Route path="/board" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}
