// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import MainLayout from "./layouts/mainLayout";
import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Success from "./pages/Auth/Success";
import Main from "./pages/Main";
import Community from "./pages/Community";
import CommunityWrite from "./pages/Community/CommunityWrite";

import './styles/colors.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="calendar" element={<h1>calendar</h1>} />
          <Route path="expenses" element={<h1>ExpenseListPage</h1>} />
          <Route path="analysis" element={<h1>ExpenseAnalysisPage</h1>} />
          <Route path="checklist" element={<h1>ChecklistPage</h1>} />
          <Route path="community" element={<Community />} />
          <Route path="community/write" element={<CommunityWrite />} />
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
