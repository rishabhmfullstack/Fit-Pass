import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CredSpecialPlan } from "./screens/CredSpecialPlan";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CredSpecialPlan />
  </StrictMode>,
);
