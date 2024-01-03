import logo from "./logo.svg";
import "./App.css";
import Header from "./components/main/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/main/Landing";
import SignIn from "./components/main/SignIn";
import SignUp from "./components/main/SignUp";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./components/project/Dashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/signin" Component={SignIn} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/" Component={Landing} />
            <Route Component={PrivateRoutes}>
              <Route path="/dashboard" Component={Dashboard} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
