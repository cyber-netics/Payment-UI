import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "./stages/Payment";
import Shipping from "./stages/Shipping";
import Information from "./stages/Information";

import Template from "../../Templates/Divide";
import CheckoutSummary from "./Summary";
import HeaderMenu from "./Menu";

const CheckoutRoutes: React.FC = () => (
  <Routes>
    <Route path={"payment"} element={<Payment />} />
    <Route path={"shipping"} element={<Shipping />} />
    <Route path={"information"} element={<Information />} />
  </Routes>
);

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Template
        active={1}
        header={<HeaderMenu />}
        steps={["Cart", "Information", "Shipping", "Payment"]}
      >
        <CheckoutRoutes />
        <CheckoutSummary />
      </Template>
    </>
  );
};

export default CheckoutPage;
