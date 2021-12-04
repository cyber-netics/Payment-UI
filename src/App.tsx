import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./Pages/Checkout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={"checkout/*"} element={<CheckoutPage />} />
    </Routes>
  );
};

export default App;
