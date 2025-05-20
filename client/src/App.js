// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Register from "./pages/Auth/SignUp/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="calendar" element={<h1>calendar</h1>} />
          <Route path="expenses" element={<h1>ExpenseListPage</h1>} />
          <Route path="analysis" element={<h1>ExpenseAnalysisPage</h1>} />
          <Route path="checklist" element={<h1>ChecklistPage</h1>} />
          <Route path="community" element={<h1>CommunityPage</h1>} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
