import React from "react";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SingleShowDetail from "./Pages/SingleShowDetail/SingleShowDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="show/:showId" element={<SingleShowDetail />} />
        <Route
          path="*"
          element={
            <div
              className="text-center text-danger text-lg"
              style={{ fontSize: 50 }}
            >
              Page not found!!
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
