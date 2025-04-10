// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";


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
      </Routes>
    </Router>
  );
}

export default App;
