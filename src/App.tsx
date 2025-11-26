import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CredSpecialPlan as MainScreen } from "./screens/CredSpecialPlan";
import { CredSpecialPlan as SecondScreen } from "./routes/CredSpecialPlan_V2/screens/CredSpecialPlan";
import { CredSpecialPlan as FourthScreen } from "./routes/CredSpecialPlan_V4/screens/CredSpecialPlan";
import { Payment } from "./routes/Payment/screens/Payment";
import { PaymentGateway } from "./routes/PaymentGateway/screens/PaymentGateway";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/cred-special-plan-v2" element={<SecondScreen />} />
        <Route path="/cred-special-plan-payment" element={<Payment />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/cred-special-plan-v4" element={<FourthScreen />} />
      </Routes>
    </Router>
  );
};
