import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "./stages/Payment";
import Shipping from "./stages/Shipping";
import Information from "./stages/Information";

import SideView from "./side";
import Template from "../../Templates/Divide";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Template
        active={1}
        steps={["Cart", "Information", "Shipping", "Payment"]}
      >
        <>
          <Routes>
            <Route path={"payment"} element={<Payment />} />
            <Route path={"shipping"} element={<Shipping />} />
            <Route path={"information"} element={<Information />} />
          </Routes>
        </>
        <>
          <SideView />
        </>
      </Template>
    </>
  );
};

export default CheckoutPage;
