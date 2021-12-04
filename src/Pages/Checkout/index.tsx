import React from "react";
import { Routes, Route } from "react-router-dom";

import Information from "./stages/Information";
import Shipping from "./stages/Shipping";
import Payment from "./stages/Payment";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={"information"} element={<Information />} />
        <Route path={"shipping"} element={<Shipping />} />
        <Route path={"payment"} element={<Payment />} />
      </Routes>
    </>
  );
};

export default CheckoutPage;
