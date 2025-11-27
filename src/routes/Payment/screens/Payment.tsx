import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Payment = (): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/cred-special-plan-v4");
        }, 3000);}, []);
  return (
    <main className="flex justify-center text-center items-center bg-brand-coloursdull-red overflow-hidden w-full max-w-[420px] min-w-[360px] h-[100vh] mx-auto">
     

        <h1 className="text-white text-[28px] font-figtree font-bold p-4">Payment completion with CRED Pay</h1>

    </main>
  );
};
