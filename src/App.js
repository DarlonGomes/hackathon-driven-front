import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./assets/styles/globalStyles";

import SignupPage from "./pages/SignuPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Navbar from "./layout/navbar/Navbar";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
